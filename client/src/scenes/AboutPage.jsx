import Layout from 'components/Layout/Layout'
import React from 'react'

const AboutPage = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
        <div className="container" >
      <div className="centeredDiv" style = {{'display':"flex", justifyContent:"center",alignItems:
      "center",height:"70vh"}}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%"}}
          />
        </div>
        <div className="col-md-4" style={{marginBlockStart:'20px'}}>
          <p className="text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage