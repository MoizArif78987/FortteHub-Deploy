import "./contact.css";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // POST request will be added here later on when DB is attached
    console.log(formData);
  };
  return (
    <>
      <div className="contact-page">
        {/* Fortehub LOGO */}
        <div className="FHlogodiv">
          <img src="../Artboard1.png" alt="loading.." className="FHlogo" />
        </div>
        {/* social Links */}
        <div className="FacebookClickablediv">
          <a href="https://www.facebook.com/forte.hub" target="_blank">
            <img
              src="../Facebook.png"
              alt="loading.."
              className="FacebookClickableContactPage"
            />
          </a>
        </div>
        <div className="InstagramClickablediv">
          <a href="https://www.instagram.com/fortehub/" target="_blank">
            <img
              src="../Instagram.png"
              alt="loading.."
              className="InstagramClickableContactPage"
            />
          </a>
        </div>
        <div className="LinkedInClickablediv">
          <a href="https://www.linkedin.com/company/forte-hub/" target="_blank">
            <img
              src="../LinkedIn.png"
              alt="loading.."
              className="LinkedInClickableContactPage"
            />
          </a>
        </div>

        {/* Email info tab */}
        <div className="email-info">
          <a href="" target="_blank">
            <img
              src="../chatimg2.png"
              alt="loading.."
              className="email-icon"
            />
          </a>
          <div className="email-tab-header">
            <p>
              <b>Chat to us</b>
            </p>
          </div>
          <div className="email-tab-text">
            <p>Our friendly team is here to help </p>
          </div>
          <div className="email-address">
            <p>
              <b>info@fortehub.com</b>
            </p>
          </div>
        </div>
        {/* Colored box that is supposed to hold the form is said form container  */}
        <div className="form-container">
          <div className="form-header">
            <h1>
              <b>Got Queries ?</b>
            </h1>
          </div>
          <div className="form-header-subtext">
            <p>Tell us about yourself and what's on your mind ..</p>
          </div>

          {/* Actual Form Starts Here */}

          <form onSubmit={handleSubmit}>
            <input
              className="name-textarea"
              placeholder="Enter Your Name Here"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              className="email-textarea"
              placeholder="Enter Your Email Here"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <textarea
              className="message-textarea"
              placeholder="Enter Your Message Here"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />

            <button className="send-button" type="submit">
              <p className="send-text"><b>Send Message!</b></p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
