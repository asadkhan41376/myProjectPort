"use client";
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from "react";
import FormRighr from "./FormRighr";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/contect', data);
      console.log('Message sent successfully', response);
      reset();  // Reset the form after submission
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <div>
      <section className="Contact_first">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Me</h1>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && <span>Name is required</span>}
            <input
              type="email"
              placeholder="Your Email"
              {...register("user_email", { required: true })}
            />
            {errors.user_email && <span>Email is required</span>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Your Number"
              {...register("user_phone", { required: true })}
            />
            {errors.user_phone && <span>Phone is required</span>}
            <input
              type="text"
              placeholder="Your Subject"
              {...register("subject")}
            />
          </div>
          <div>
            <textarea
              placeholder="Write Your Message Here"
              {...register("message", { required: true })}
            />
            {errors.message && <span>Message is required</span>}
          </div>
          <input type="submit" className="btn Cbtn" value="Send Message" />
        </form>
        <FormRighr />
      </section>
    </div>
  );
}

export default Form;
