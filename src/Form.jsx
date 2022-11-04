import React from "react";

function Form(props) {
  return (
    <section className="form">
      <div className="heading">
        <h2 className="form-heading">Contact Me</h2>
        <p className="heading-text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form action="contact-form" className="form-class">
        <div className="flex">
          <div className="form-group flex-item">
            <label className="form-label" htmlFor="first_name">
              First Name
            </label>
            <div className="form-input">
              <input
                placeholder="Enter your first name"
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
              />
              <img
                src="images/icon-error.svg"
                className="error-icon"
                alt="error-img"
              />
              <p className="error-text">First Name cannot be empty</p>
            </div>
          </div>

          <div className="form-group flex-item">
            <label className="form-label" for="last_name">
              Last Name
            </label>
            <div className="form-input">
              <input
                placeholder="Enter your last name"
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
              />
              <img
                src="images/icon-error.svg"
                className="error-icon"
                alt="error-img"
              />
              <p className="error-text">Last Name cannot be empty</p>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" for="email">
            Email
          </label>
          <div className="form-input">
            <input
              placeholder="yourname@email.com"
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <img
              src="images/icon-error.svg"
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">Looks like this not an email</p>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" for="message">
            Message
          </label>
          <div className="form-input">
            <textarea
              placeholder="Send me a meesage and I'll reply you as soon as possible..."
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="form-control"
            ></textarea>
            <img
              src="images/icon-error.svg"
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">Please enter a message</p>
          </div>
        </div>

        <div className="form-group terms">
          <input type="checkbox" id="terms" name="terms" value="conditions" />
          <label className="terms-label" for="terms">
            You agree to providing your data to Ayomidea1 who may contact you.
          </label>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            id="btn__submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
