import axios from "axios";
import Layout from "components/Layout/Layout";
import React,{useState,} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import toast from 'react-hot-toast'
import '../../styles/AuthStyles.css';
import { useAuth } from "context/auth";

const LoginPage = () => {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth();
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
        // form Handlesubmit function
        const handleSubmit = async(e)=>
        { e.preventDefault() // single page application will remain as it is (whole page not get refreshed)
          //  console.log(name,email,password,phone,address)
          //  toast.success('Register Successfully');
          try{ 
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,{email,password,})
            console.log("response data",res)
    
            if( res.data.success )
            {  
              toast.success(res.data.message)
              setAuth({
                ...auth,
                user:res?.data?.user,
                token: res?.data?.token,
              })
              console.log(res.data.message)
    
              console.log("inside toast")
              localStorage.setItem('auth',JSON.stringify(res.data))
              console.log("auth",auth)
              navigate(location.state || '/ ');
            }
            else{
              toast.error(res.data.message)
            }
          }
          catch(error){
            console.log(error)
            toast.error('Something went wrong')
          }
        }
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>
        {/* <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div> */}
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        {/* <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div> */}
        {/* <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div> */}
        {/* <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="What is Your Favorite sports"
            required
          />
        </div> */}
        <div className="mb-3">
         <button type="button" className="btn btn-primary" onClick = {()=>{navigate('/forgot-password')}}>
          Forgot Password
        </button>
        </div>
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default LoginPage