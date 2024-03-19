import React, { useState } from 'react';
import '../../assets/css/Help.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../common/footer/Footer';


const HelpPage = () => {
    const navigate=useNavigate();
 const handlesaveupdate=()=>{
    navigate("/hero")
 }
 const handleback=()=>{
    navigate("/hero")
 }
  return (
    <>
    <div className='helpwhole'>

    <div className="support-page">
      <h2 className="page-title">Contact Customer Support</h2>
      <p>If you have any questions or need assistance, please don't hesitate to contact our customer support team. We are here to help you.</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: moni@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          </div>
          <button className="submit-button" type="submit" onClick={handlesaveupdate}>Submit</button>
          <button className="cancel-button" type="submit" onClick={handleback}>Cancel</button>
        </form>
      </div>
    </div>

    </div>
    <Footer/>
    </>
    
  );
};

export default HelpPage;
