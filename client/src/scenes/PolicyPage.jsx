import React from "react";
import Layout from "./../components/Layout/Layout";

const PolicyPage = () => {
  return (
    <Layout title={"Privacy Policy"}>
         <div className="container" >
      <div className="centeredDiv" style = {{'display':"flex", justifyContent:"center",alignItems:
      "center",height:"70vh"}}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4" style={{marginBlockStart:'20px',padding:"20px"}}>
          <h2>Privacy Policy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec scelerisque mauris. Suspendisse eleifend nisl nec nisi ultrices, vel iaculis odio consectetur. Integer dictum erat odio, id consectetur ante elementum ac. Nulla facilisi. Vivamus ultrices lacus at elementum rhoncus. Integer eu neque eget elit posuere accumsan. Etiam dapibus, mauris in aliquet elementum, ipsum nulla venenatis libero, et eleifend sem odio nec tellus.</p>
         <h4>Types of Data Collected</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis massa nec quam volutpat luctus at sit amet turpis. Duis feugiat, turpis non volutpat vulputate, ex quam rhoncus elit, sit amet luctus quam magna eu dui. Nulla facilisi. Nullam laoreet risus sit amet elit tincidunt, at tincidunt lorem convallis. Nulla quis pharetra felis.</p>
          <h4>Data Use</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper justo id tortor tempor, ut suscipit elit facilisis. Etiam scelerisque velit nisi, nec congue lorem hendrerit at. Sed eget augue non tortor dapibus ultricies. Nullam ut ante purus. Mauris fringilla arcu id ligula auctor facilisis.

</p>
          {/* <h4>Cookies and Tracking Technologies</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacus sed quam varius eleifend. Nulla facilisi. Mauris vel massa eget sapien varius rhoncus. Etiam a tortor ac nisi dapibus fringilla vel nec justo</p> */}
         
          
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
