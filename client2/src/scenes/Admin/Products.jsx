import AdminMenu from "components/Layout/AdminMenu";
import Layout from "components/Layout/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "styles/Homepage.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  // get All products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // life cycle method
  useEffect(() => {
    getAllProducts();
  },[]);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap ">
          {products?.map((p) => (
            <>
            <Link key = {p._id} to = {`/dashboard/admin/update-product/${p.slug}`} className="product-link">
            {/* <div className="card m-2 " style={{ width: "20rem"}} >
              <img className="card-img-top" src={`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-photo/${p._id}`} alt={p.name}  />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description}
                </p> */}
                <div className="card m-2" key={p._id} style = {{width:"20rem"}}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
               
                
                
                
              </div>
            </div>
            </Link>
          
            </>
          ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
