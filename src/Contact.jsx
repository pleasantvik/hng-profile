import React from "react";
import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <div className="link">
      <Link to="/contact" className="link-item" id="contact">
        <p className="title">Contact</p>
      </Link>
    </div>
  );
}

export default Contact;
