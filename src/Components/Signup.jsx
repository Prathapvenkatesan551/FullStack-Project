import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    password: "",
    Cpassword: "",
    account: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.firstname.trim() === "") {
      tempErrors.firstname = "Required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      tempErrors.email = "Required";
      isValid = false;
    }

    if (formData.mobilenumber.trim() === "") {
      tempErrors.mobilenumber = "Required";
      isValid = false;
    } else if (formData.mobilenumber.length !== 10) {
      tempErrors.mobilenumber = "Invalid";
      isValid = false;
    }

    if (formData.password.length < 8) {
      tempErrors.password = "Weak";
      isValid = false;
    }

    if (formData.Cpassword !== formData.password) {
      tempErrors.Cpassword = "Not Match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registered successfully");
    
      console.log("Data saved to local storage");
      window.location.href = "/DB";
    }
    else{
      alert("Enter valid Details");
    }
  };

  return (
    <div className="cont">
      <form action="submit" className="form">
        <div className="heading">
          <h1>Sign up</h1>
        </div>
        <div id="inp">
         
          <input type="text" name="firstname" 
          className="firstname"
           placeholder="First Name"
           value={formData.firstname}
           onChange={handleChange}/>
           
          
        </div>
        
        <div id="inp">
         
          <input type="text" name="lastname"
           className="lastname" 
           placeholder="Last Name"
           value={formData.lastname}
           onChange={handleChange}
           />
        </div>
        <div id="inp">
          <input type="email" name="email"
           className="email" 
           placeholder="Email"
           value={formData.email}
           onChange={handleChange}
           />
           
        
        </div>
        
        <div id="inp">
          <input type="number" name="mobilenumber"
           className="mobilenumber" 
           placeholder="Mobile number"
           value={formData.mobilenumber}
           onChange={handleChange}
           />
           
          
        </div>
        <div id="inp">
         
          <input type="password" name="password" 
          className="password" 
           placeholder="New Password"
           value={formData.password}
           onChange={handleChange}
           />
           
          
          
        </div>
        <div id="inp">
          
          <input type="password" name="Cpassword" 
          className="Cpassword"
           placeholder="Confirm Password"
           value={formData.Cpassword}
            onChange={handleChange}
           />
          
          
        </div>
        <div className="radio">
          <div className="rcont">
           
            <input type="radio" name="account"
             value="buyer"
             onChange={handleChange}
             />
            <label htmlFor="">Buyer</label>
          </div>
          <div className="rcont">
           
            <input type="radio" name="account" 
            value="seller" 
            onChange={handleChange}
            />
            <label htmlFor="">seller</label>    
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="submitbutton"
          onClick={handleSubmit}
          >
            Submit
          </button> 
          <button className="login"><Link to={"/Signup"} className='link'>Login</Link></button> 
        </div>
      </form>
    </div>
  );
};

export default Signup;
