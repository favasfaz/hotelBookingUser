import mongoConnection from "../../../util/config";
import userSchema from "../../../modal/user-schema";
import bcrypt from "bcrypt";
import { creatingTokens } from "../../../authCreation/creatingToken";

export default async function UserHandler(req, res) {
  await mongoConnection();
  const { method } = req;

  //userLogin-----------

  if (method === "POST" && req.body.type === "login") {
    const { type, data } = req.body;

    const user = await userSchema.findOne({ email: data.email });
    try {
      if (user) {
        const result = await bcrypt.compare(data.password, user.password);
        if (!result) throw "incorrect password";
        await sendOtp(user.phone)
        const Tokens = creatingTokens({
          email: user.email,
          phone: user.phone,
        });
      return  res.status(200).json(Tokens)
      }
      throw "user Not found";
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  //userRegistration----------

  if (method === "POST") {
    try {
      let { password, email, phone, name } = req.body;
      const isUser = await userSchema.findOne({ $or: [{ email }, { phone }] });
      if (isUser) throw "user Already found";
      password = await bcrypt.hash(password, 10);
      const newUser = await userSchema.create({ password, email, phone, name });
      const Tokens = creatingTokens({
        email: newUser.email,
        phone: newUser.phone,
      });
      res.status(200).json(Tokens);
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }
}



