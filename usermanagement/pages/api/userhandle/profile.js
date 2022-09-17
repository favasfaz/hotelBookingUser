import userSchema from "../../../modal/user-schema";
import {verifyToken} from '../../../authCreation/verifyToken'
import bcrypt from "bcrypt";

export default async function userProfileHandling(req,res){
    const {method} = req

    if(method === 'PUT' && req.body.type ==='resetPassword'){
     try {
        await verifyToken(req,res)
        const id = req.user.id
        const userExist = await userSchema.findById(id)
        const result = await bcrypt.compare(req.body.data.currentPassword, userExist.password);
        if(!userExist || !result) return res.status(400).json({message:'check current password'})
        await userSchema.findByIdAndUpdate(id,{$set:req.body.data})
       res.status(201).json('success')
     } catch (error) {
        res.status(400).json(error)
     }
    }

    if(method === 'PUT'){
        try {
            await verifyToken(req,res)
        const id = req.user.id
       let user = await userSchema.findByIdAndUpdate(id,{$set:req.body},{new: true})
       user = {email:user.email,name:user.name,phone:user.phone}
       res.status(201).json(user)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}