import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="contact-info d-flex flex-column align-items-center">
      <h2 className="text-center my-2">Contact Us</h2>

      <p className="text-center my-3">
        <strong>Office Number:</strong> +91-08512-279459/28 <br />
        <strong>Address:</strong> Sri Raghavendra Swamy Mutt, Near Main Road, Hungund, Karnataka <br />
        <strong>Email:</strong> info@hungundrayaramutt.org
      </p>
      
      <Link to="/home" className="btn btn-primary my-3">Go to Home</Link>
    </section>
  );
}

export default Contact;