import hotelSchema from '../../../modal/hotel-schema'
import mongoConnection from "../../../util/config";

export default async function hotelHandling(req,res){
    const {method} = req
    mongoConnection()

    if(method === 'GET'){
     try {
        const hotels = await hotelSchema.find({})
            res.status(201).json(hotels)
     } catch (error) {
      console.log(error,'error');  
     }
    }
}