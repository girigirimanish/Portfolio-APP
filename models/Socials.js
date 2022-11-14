import mongoose from 'mongoose'

const socialSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        _type:{type:String,required: true},
        title:{type:String,required: true},
        url:{type:String,required:true}
},{timestamps:true});

module.exports = mongoose.models.Socials || mongoose.model('Socials', socialSchema)

