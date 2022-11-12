const { timeStamp } = require('console');
const { url } = require('inspector');
const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
    _id: mongoose.isObjectIdOrHexString,
    _type: "Social",
    title:{type:String,required: true},
    url:{type:url,required:true}
},{timestamps:true});

export default mongoose.model("Social",SocialSchema)