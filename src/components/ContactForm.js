import React from "react";
import "./ContactForm.css";

function ContactForm({ agent }) {
  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact {agent.name}</h2>
      <form className="contact-form-fields">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" rows={3} className="contact-textarea" />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
