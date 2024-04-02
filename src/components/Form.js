

"use client"

import FormRighr from './FormRighr';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Form() { 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    

    emailjs
      .sendForm('service_4lfk8qb', 'template_ll9h2sq', form.current, {
        publicKey: 'jV8ZlRM-HE8MLrZvL',
      })
      .then(
        () => {
          console.log('SUCCESS!');

            },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      form.current.reset();
  };
  return (
    <div>
   <section className="Contact_first">
   
      
      <form onSubmit={sendEmail} ref={form} >
        <h1 >Contact Me</h1>
        <div>
          <input type="text"  placeholder="Your Name" name="user_name"  required/>
          <input type="email" placeholder="Your Email" name="user_email" required />
        </div>
        <div>
          <input type="number" placeholder="Your Number" name="user_phone" required/>
          <input type="text" placeholder="Your Subject" />
        </div>
        <div>
          <textarea  placeholder="Write Your Massge Here" name="message" required/>
         
        </div>
        <input type="submit"  className="btn Cbtn" value="send message"/>
      </form>

      <FormRighr/>
    </section>
    </div>
  )
}

export default Form
