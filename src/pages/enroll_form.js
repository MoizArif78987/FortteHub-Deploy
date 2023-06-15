import React, { useState } from 'react';
import './enroll_form.css';
import img1 from './pictures/FH-LOGO.png';
import img2 from './pictures/image.png';
import img4 from './pictures/Phone.png';
import img5 from './pictures/Ellipse 43.png';
import img6 from './pictures/Calendar.png';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import validator from 'validator';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Enroll_form() {

  const [form, setForm] = useState({});
 

 
  const handleform = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    
  
  };
  const NextPage = () => <h1>Next Page</h1>;
  const handlesumbit = async (e) => {
    e.preventDefault();
  
    // validate form fields
    let isValid = true;
  
    if (!form.firstName) {
      isValid = false;
      alert("Please enter your first name");
    }
  
    if (!form.lastName) {
      isValid = false;
      alert("Please enter your last name");
    }
  
    if (!form.email || !validator.isEmail(form.email)) {
      isValid = false;
      alert("Please enter a valid email address");
    }
  
    if (!form.phoneNumber || !validator.isMobilePhone(form.phoneNumber)) {
      
      isValid = false;
      alert("Please enter a valid phone number");
    }
  
    if (!form.instagramHandle) {
      isValid = false;
      alert("Please enter your Instagram handle");
      
    }
  
    // submit form if all fields are valid
    if (isValid) {
      const response = await fetch("http://localhost:8080/demo", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
  
      // clear form fields and show success message
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        Date:"",
        phoneNumber: "",
        instagramHandle: "",
      });
      alert("Form submitted successfully!");
    }
  };

  return (
 <body>
      <div id="App">
      <div id="img1"><img id="img1" src={img1} alt="" /></div>
      <div id="text1">&lt;\DEVATHON&gt; REGISTRATION FORM</div>
      <div id="text2">Personal Information</div>

      
        <div className="container">
          <div className="input-container">
          <TextField
          id="t1"
          label="First Name"
          focused
          name="firstName"
          onChange={(handleform) }
          
           /></div>

          <div className="input-container" style={{ marginTop: '12%' }}>
            <TextField
              id="t1"
              label="Email Address"
              focused
              name="email"
              onChange={(handleform) }
            /></div>

          <div className="input-container" style={{ marginTop: '20%' }}>
            <TextField
              id="t1"
              label="Date Of Birth"
              focused
              name="Date"
              type="date"
              onChange={(handleform) }
              
              
               /></div></div>

        <div className="container">
          <div className="input-container1">
            <TextField
              id="t1"
              label="Last Name"
              focused
              name="lastName"
              onChange={(handleform) }
            /></div>

          <div className="input-container1" style={{ marginTop: '8.5%'  }}>
              <TextField 
              id="t2"
              label="Phone Number"
              focused
              name="phoneNumber"
              onChange={(handleform) }
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </InputAdornment> ),}}
            /></div>

          <div className="input-container1" style={{ marginTop: '16.5%' }}>
            <TextField
              id="t1"
              label="Instagram Handle"
              focused
              name="instagramHandle"
              onChange={(handleform) }
            /></div>
        </div>
        
       {/* 
<Router>
  <div>
    <Route path="/next-page" component={NextPage} />
    <Link to="/next-page">Go to Next Page</Link>
  </div>
</Router>
*/}



        <div id="text3">Any Queries? <a href="https://www.instagram.com/fortehub/"> Contact Us Here! </a></div>
        <div id="text4"> Go Back</div>
        <Button id="button" variant="contained" onClick={handlesumbit }>Continue</Button>
      
<div id="img2"><img id="img3"src={img2}alt=""/></div>
<div id="img5"><img id="img5"src={img5}alt=""/></div>
<div id="img4"><img id="img4"src={img4}alt=""/></div>
<div id="img6"><img id="img6"src={img6}alt=""/></div>

<div id="dphn">
  <PhoneInput id="phn"
  name="phoneNumber"
  onChange={setForm}
  defaultCountry="PK"
  international
/></div>



    </div>
    </body>
  );


}

export default Enroll_form;
