import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "styles/WelcomePopup.css"

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);


  };

  const modalStyle = {
    width: "70%", // Set the width of the modal to 50% of the screen
    margin: "auto", // Horizontally center the modal
    fontSize: "20px", // Adjust the font size of the modal content
   


  };

  return (
    <Modal show={showPopup} onHide={handleClose} centered className="welcome-modal"  style = {modalStyle}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center" style={{ fontFamily: "Playfair Display" }}>Welcome to our website!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
            <img
              className="d-block w-100 h-100"
              src="images2\carousel1.jpg"
              alt="First slide"
              
             
            />
        
          {/* Add more carousel items as needed */}
        
      </Modal.Body>
    </Modal>
  );
};

export default WelcomePopup;
