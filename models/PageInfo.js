import mongoose from 'mongoose'

const pageInfoSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        _type:{type:String,required: true},
        address:{type:String,required: true},
        backgroundInformation:{type:String,required:true},
        email:{type:String,required:true},
        role:{type:String,required:true},
        name:{type:String,required:true},
        phoneNumber:{type:String,required:true},
},{timestamps:true});

module.exports = mongoose.models.pageInfo || mongoose.model('pageInfo', pageInfoSchema)

