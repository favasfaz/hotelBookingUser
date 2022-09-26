import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"category"
   },
   city:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   distance:{
    type:String,
    required:true
   },
   discription:{
    type:String,
    required:true
   },
   rating:{
    type:Number,
    min:0,
    max:5
   },
   rooms:[String],
   featured:{
    type:Boolean,
    default:false
   },
   reviews:[
      {type:mongoose.Schema.Types.ObjectId,rating:Number,review:String,ref:'user'}   
  ], 
  phone:{
   type:Number,
   required:true
  },
  imageUrls:[String],
  booking:[String]
},{timestamps: true})
 
const hotel = mongoose.models.hotel || mongoose.model("hotel", hotelSchema);
export default hotel;
