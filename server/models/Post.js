const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    title:{
        type:String
    },
    body:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Post',postSchema)