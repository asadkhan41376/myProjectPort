import React from "react";
import "@/style/contect.scss";
// import Button from "@/components/Button";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Form from "./Form";

function Contect() {
  return (
    <>
      <section className="form-section">
        <Form />

        <div className="formRgtPrt">
          <div className="elm">
            <div className="icon">
              <FaLocationDot style={{ color: "#836BF0" }} />
            </div>
            <div className="eml_heading">
              <h1>Address</h1>
              <p> Sajja Nagar "A" Block mullatalai, Udaipur Raj.</p>
            </div>
          </div>

          <div className="elm">
            <div className="icon">
              <FaPhoneAlt style={{ color: "#F75023" }} />
            </div>
            <div className="eml_heading">
              <h1>Phone</h1>
              <p>+91 7976891704</p>
            </div>
          </div>
          <div className="elm">
            <div className="icon">
              <MdEmail style={{ color: "#1CBE59" }} />
            </div>
            <div className="eml_heading">
              <h1>Emial</h1>
              <p>asadkhan41376@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contect-secound-section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.016054238719!2d73.65897897405762!3d24.58864215608291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e549a6cf8489%3A0x885fcbc701684750!2sMastan%20Baba%20Dargah%20and%20Masjid!5e0!3m2!1sen!2sin!4v1707549806242!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contect;
