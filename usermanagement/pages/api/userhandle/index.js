import mongoConnection from "../../../util/config";
import userSchema from "../../../modal/user-schema";
import bcrypt from "bcrypt";
import { creatingTokens } from "../../../authCreation/creatingToken";

export default async function UserHandler(req, res) {
  // await mongoConnection();
  const { method } = req;

  //phoneNumber verification

  if(method === 'GET'){
    const {phone} = req.query
    console.log(phone,'phone');
    const user = await userSchema.findOne({phone})
    if(user){
      return res.status(200).json(user)
    }
    return res.status(401).json({message:'user Not found'})
  }

  //reseting Password------------

  if (method === "POST" && req.body.type === "resetPassword") {
    console.log(req.body.type, "type");
    const { phone, password } = req.body;
    console.log("api");
    await userSchema.findOneAndUpdate(
      { phone: phone },
      { $set: { password: password } }
    );
    return res.status(200).json({ message: "success" });
  }

  //userLogin-----------

  if (method === "POST" && req.body.type === "login") {
    const { type, data } = req.body;
    let user = await userSchema.findOne({ email: data.email });
    try {
      if (user) {
        const result = await bcrypt.compare(data.password, user.password);
        if (!result) throw "incorrect password";
        const Tokens = creatingTokens({
          id : user._id,
          email: user.email,
          phone: user.phone,
        });
        user = {email:user.email,name:user.name,phone:user.phone}
        return res.status(200).json({Tokens,user});
      }
      throw "user Not found";
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  //userRegistration----------

  if (method === "POST" || req.body.type === "register") {
    try {
      if (req.body.type) {
        const phone = req.body.phone;
        await userSchema.findOneAndUpdate(
          { phone: phone },
          { $set: { verified: true } }
        );

        return res.status(200).json({ message: "successfully registered" });
      }
      let { password, email, phone, name } = req.body;
      const isUser = await userSchema.findOne({ $or: [{ email }, { phone }] });
      if (isUser) throw "user Already found";
      password = await bcrypt.hash(password, 10);
      const newUser = await userSchema.create({ password, email, phone, name });

      res.status(200).json(newUser);
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }
}
