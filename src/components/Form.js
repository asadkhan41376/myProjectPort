"use client";
import React, { useState } from "react";
import "@/style/Form.scss";
function Form() {
    
  return (
    <>

    <div className="contect-form">
        <div className="heading">
            <h3>Contect Me</h3>
            <h1>I Want To Hear From You</h1>
            <p>Please fill out the form on this section to contact with me. Or call between <br />9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
           
        </div>
    <form action="https://formspree.io/f/mrgwjoeg"
            method="POST"> 
        <div className="input"> 
          <input type="text"  name ="name"placeholder="First Name" required/>
          <input type="email" name="Email" className="email"placeholder="Your Email" required />
        </div>
        

        <div className="input">
          <input type="number" name="Phone No." placeholder="Phone No." required/>
          <input type="text" name="Subject" placeholder="Subject" required/>
        </div>
        <div className="input">
          <textarea type="text"name="Message" className="texe"placeholder="Message" required />
        </div>
                <div className="br"> <button type="submit" className="sbtn"> Submit Now</button></div>
       
      </form>
    </div>
     
    </>
  );
}

export default Form;
