import React, { useState, useEffect } from 'react';
import { GetUsers } from '../services/SignupService';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",    
    password: "",
  });
  
  const [employees, setEmployees] = useState([]);
  const [Femail, setEmail] = useState('');
  const [Fpassword, setPassword] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    GetUsers()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const filterByDomain = () => {
    const filtered = employees.find(employee => employee.email === formData.email);
    if (filtered) {
      setEmail(filtered.email);
      setPassword(filtered.password);
      return true; 
    } else {
      setEmail('');
      setPassword('');
      return false; 
    }
  };

  const validate = () => {
    return (
      formData.email !== "" &&
      formData.password !== "" &&
      Femail === formData.email &&
      Fpassword === formData.password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filterByDomain() && validate()) {
      // alert("Login successful");
      window.location.href = "/Home";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className='Lcont'>
      <form className='Lform'>
        <h1>Login</h1>
        <div className='Linput'>
            <input 
              type="text" 
              placeholder='Email' 
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
        </div>
        <div className='Linput'>
            <input 
              type="password" 
              placeholder='Password' 
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
        </div>
        <div className='Lbuttons'>
          <button className='login' onClick={handleSubmit}>Login</button>
          <button className='Lsignup'>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
