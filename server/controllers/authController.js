import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import { requireSignIn } from "../middlewares/authMiddlewares.js";
import orderModel from "../models/orderModel.js";

export const registerController = async(req,res)=>{
    try{
         const {name, email, password,phone,address,answer} = req.body
         // ********************  validations  ******************
         if(!name)
         {
            return res.send({message: "Name is required"})
         }

         if(!email)
         {
            return res.send({message: "Email is required"})
         }
         
         if(!password)
         {
            return res.send({message: "Password is required"})
         }

         if(!phone)
         {
            return res.send({message: "Phone no. is required"})
         }
         if(!address)
         {
            return res.send({message: "Address is required"})
         }
         if(!answer)
         {
            return res.send({message: "Answer is required"})
         }

         //check user
         const existingUser = await userModel.findOne({email:email})
         // existing user
         if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'Already Register please login',
            })
         }

         // ****************** Validations **************************

         // * *** register user

         const  hashedPassword = await hashPassword(password)
        
         // saving user
         const user = await new userModel({name,email,phone,address,answer,
        password : hashedPassword}).save()
            
        res.status(201).send(
            {
                success: true,
                message: "User Register Successfully",
                user
            }
        )
         

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error

        })
    }
};

// POST LOGIN
export const loginController = async(req,res)=>
{
    try{
        const {email,password} = req.body   
        // ** validations **
        if(!email || !password)
        {
            return res.status(404).send(
                {
                    success:false,
                    message: "Invalid email or password"
                }
            )
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }
        const  match = await comparePassword(password,user.password)
         if(!match)
         {
            return res.status(200).send({
                success: false,
                message: "Invalid email or password"
            })
         }

         // token
         const token  = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'2d'});
         
         res.status(200).send({
            success: true,
            message: 'login successfully',
            user:
            {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                // answer : user.answer
                role:user.role,
            },
            token,
         })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error while login",
            error
        })
    }
}

// forgotPasswordController
export const forgotPasswordController = async(req,res)=>{
    try{
           const {email,answer,newPassword} = req.body
           if (!email) {
            res.status(400).send({ message: "Emai is required" });
          }
          if (!answer) {
            res.status(400).send({ message: "Answer is required" });
          }
          if (!newPassword) {
            res.status(400).send({ message: "New Password is required" });
          }
          //Check
          const user = await userModel.findOne({email,answer})
          //validations
          if(!user){
            return res.status(404).send({
                success:false,
                message:'Wrong Email or Answer'
            })
          }
          const hashed  = await hashPassword(newPassword)
          await userModel.findByIdAndUpdate(user._id,{password:hashed})
          res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
          })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wront",
            error
        })
    }
}


export const testController = async(req,res)=>
{
console.log("protectedRoute")
res.status(200).send({message: "Protected Routes"})
}


// Update profile Controller
export const updateProfileController = async(req,res)=>
{
  try{
      const {name,email,password,address,phone} = req.body
      console.log("request body",req.body, "req.user._id",req.user.id)
      const user = await userModel.findById(req.user.id)
      console.log("usermodel",user)
      // password
      if(!password && password.length <6)
      {
        return res.json({error:"Password is required  and 6 characters long"})
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(req.user.id,{
        name : name || user.name,
        password:hashedPassword || user.password,
        phone : phone || user.phone,
        address: address  || user.address,
      

      },{new:true})
      console.log(updatedUser)

      res.status(200).send({
        success:true,
        message:"Profile Updated Successfully",
        updatedUser
      })

  }
  catch(error)
  {
    console.log(error)
    res.status(400).send({
      success:false,
      message:"Error while updating profile",
      error
    })
  }

}
// GEt order controller

//orders
export const getOrderController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({ buyer: req.user.id })
        .populate("products", "-photo")
        .populate("buyer", "name");
      res.json(orders);
      console.log(orders,"orders")
      console.log("user",req.user.id);
      console.log("user_id",req.user._id)
    //   console.log("products",products)
    //   console.log("buyer",buyer)
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };

  //orders-all
export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: "-1" });
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };

  //order status
export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };