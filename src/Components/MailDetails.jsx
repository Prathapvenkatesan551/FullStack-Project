import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './MailDetails.css'

export const MailDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_an5ux35', 'template_w7zs4q5', form.current, {
        publicKey: 'NiAr67f53gBupPVfM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(" Mail sent Sucessfully ");
         window.location.href = '/Home';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Mailcont'>
      <h1>Contuct Us</h1>
      <img src="https://st3.depositphotos.com/1001877/32125/i/450/depositphotos_321258156-stock-photo-contact-us-website-page-on.jpg" alt="" className='contact' />
      
    <form ref={form} onSubmit={sendEmail} className='Mf'>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='button'/>
    </form>
    </div>
  );
};