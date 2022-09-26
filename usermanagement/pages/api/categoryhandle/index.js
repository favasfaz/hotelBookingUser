import categorySchema from "../../../modal/category-schema"
import mongoConnection from "../../../util/config";

export default async function userProfileHandling(req,res){
    const {method} = req
    // mongoConnection()

    if(method === 'GET'){
     try {
        const categories = await categorySchema.find({})
            res.status(201).json(categories)
     } catch (error) {
      console.log(error,'error');  
     }
    }
}