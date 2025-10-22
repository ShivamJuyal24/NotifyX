import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    subject:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    channel:{
        type:String,
        enum:['email', 'sms'],
        default:'email',
    }, 
},{timestamps:true});

export default mongoose.model('Template',templateSchema);