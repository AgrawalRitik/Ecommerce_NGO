import express from "express"
import {registerController,loginController,testController, forgotPasswordController, getOrderController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from "../middlewares/authMiddlewares.js"
import { updateProfileController } from "../controllers/authController.js"


// Ruter object
const router = express.Router()

// Routing
// Register API
router.post('/register',registerController)

//LOGIN
router.post('/login',loginController)

// Forgot Password || POST
router.post('/forgot-password',forgotPasswordController);

// test route
router.get('/test',requireSignIn,isAdmin,testController)

// protected User-route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
res.status(200).send({ok:true});
})

// protected Admin-route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
    })

// update profile
router.put('/profile',requireSignIn,updateProfileController);


// orders
router.get('/orders',requireSignIn,getOrderController);

// orders -all
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);

// order update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController);

export default router