import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; // not forget .js

//Protected Routes token base
// req--> next --> res
export const requireSignIn = async(req,res,next)=>
{ try{
     const decode =  jwt.verify(req.headers.authorization,
        process.env.JWT_SECRET);
     req.user = decode;
     console.log("deocde",req.user)
     next();
   
    
    }
    catch(error){
      console.log(error)
    }
}

// admin access
export const isAdmin = async(req,res,next)=>
{
    try{
        const decode =  jwt.verify(req.headers.authorization,
            process.env.JWT_SECRET);
         req.user = decode;

    //    const user = await User.findById(req.user._id)
       const user = await User.findById(req.user.id)
       console.log("user",user)
       console.log("user.role",user.role)
       console.log("user",req.user)


       if(user.role !==1)
       {
        return res.status(401).send(
            {
                success: false,
                message:'UnAuthorized Access'
            }
        )
       }
       else
       {
        next();
       }
    }
    catch(error)
    {
        console.log(error)
        res.status(401).send(
            {
                success: false,
                error,
                message: "Error in admin middleware"
            }
        )
        }
}