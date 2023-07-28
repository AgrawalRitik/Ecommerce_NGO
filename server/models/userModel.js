import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
       name : {
        type:String,
        required: true,
        trim: true,
       },
       email: {
        type : String,
        requried: true,
        unique : true,
       },
       password: {
        type : String,
        required: true
       },
       phone: {
           type:String,
           requried: true,
       },
       address: {
        type:String,
        required: true
       },
       
       answer: {
        type: String,
        required: true,
      },
       role: {
        type: Number,
        default: 0
       },

       
    },
    {
        timestamps: true
    }
)

const User =  mongoose.model('Users',userSchema)
export default User;