

import Layout from 'components/Layout/Layout';
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {Routes,Route} from "react-router-dom"
import HomePage from 'scenes/HomePage';
import AboutPage from 'scenes/AboutPage';
import ContactPage from 'scenes/ContactPage';
import PolicyPage from 'scenes/PolicyPage';
import Pagenotfound from 'scenes/Pagenotfound';
import RegisterPage from 'scenes/Auth/RegisterPage';

import { Toaster ,toast} from 'react-hot-toast';
import LoginPage from 'scenes/Auth/LoginPage';
import Dashboard from 'scenes/user/Dashboard';
import PrivateRoute from 'components/Layout/Routes/Private';
import ForgotPassword from 'scenes/Auth/ForgotPassword';
import AdminRoute from 'components/Layout/Routes/AdminRoute';
import AdminDashboard from 'scenes/Admin/AdminDashboard';
import CreateCategory from 'scenes/Admin/CreateCategory';
import CreateProduct from 'scenes/Admin/CreateProduct';
import Users from 'scenes/Admin/Users';
import Orders from 'scenes/user/Orders';
import Profile from 'scenes/user/Profile';
import Products from 'scenes/Admin/Products';
import UpdateProduct from 'scenes/Admin/UpdateProduct';
import Search from 'scenes/Search';
import { ProductDetails } from 'scenes/ProductDetails';
import Categories from 'scenes/Categories';
import CategoryProduct from 'scenes/CategoryProduct';
import CartPage from 'scenes/CartPage';
import AdminOrders from 'scenes/Admin/AdminOrders';
function App() {
  return (
   <>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/product/:slug' element = {<ProductDetails/>}/>
      <Route path = '/category/:slug' element = {<CategoryProduct/>}/>
      <Route path  = "/categories" element = {<Categories/>}/>
      <Route path = "/cart" element = {<CartPage/>}/>
      <Route path = "/search" element = {<Search/>}/>
       
    <Route  path = '/dashboard' element = {<PrivateRoute/>}>
      <Route path = 'user' element = {<Dashboard/>}/>
      <Route path = 'user/orders' element = {<Orders/>}/>
      <Route path = 'user/profile' element = {<Profile/>}/>
    </Route>

    <Route path = '/dashboard' element = {<AdminRoute/>}>
        <Route path = 'admin' element = {<AdminDashboard/>}/>
        <Route path = 'admin/create-category' element={<CreateCategory/>}/>
        <Route path = 'admin/create-product' element = {<CreateProduct/>}/>
        <Route path = 'admin/update-product/:slug' element = {<UpdateProduct/>}/>
        <Route path = 'admin/users' element = {<Users/>}/>
        <Route path = 'admin/products' element = {<Products/>}/>
        <Route path = 'admin/orders' element = {<AdminOrders/>}/>
    </Route>
      <Route path = '/register' element = {<RegisterPage/>}/>
      <Route path  = "/forgot-password" element = {<ForgotPassword/>}/>
      <Route path = '/login' element = {<LoginPage/>}/>
      <Route path = '/about' element={<AboutPage/>}/>
      <Route path = '/contact' element={<ContactPage/>}/>
      <Route path = '/policy' element = {<PolicyPage/>}/>
      <Route path = '/*' element = {<Pagenotfound/>}/>
    </Routes>
  
   </>
  );
}

export default App;
