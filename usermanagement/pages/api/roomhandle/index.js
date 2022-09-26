import roomSchema from '../../../modal/room-schema'
import mongoConnection from "../../../util/config";

export default async function roomHandling(req,res){
    const {method} = req
    mongoConnection()

    if(method === 'GET'){
     try {
        const rooms = await roomSchema.find({})
            res.status(201).json(rooms)
     } catch (error) {
      console.log(error,'error');  
     }
    }
}