import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    hotelId:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true
    } ,
    description:{
        type:String,
        required:true
    },
    roomNumber:{
        type:Number,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    },
    reviews:[
        {type:mongoose.Schema.Types.ObjectId,rating:Number,review:String}
    ],
    currentBooking:[String],
    isNotAvailable:[Object],
      imageUrls:[String]
},{timestamps: true})
 const  room = mongoose.models.room || mongoose.model("room", roomSchema);
export default room
