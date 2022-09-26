import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    imageUrls:[String]
});

const category = mongoose.models.category || mongoose.model("category", categorySchema);
export default category;
