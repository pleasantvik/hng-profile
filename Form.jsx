import React, { useState } from "react";

function Form(props) {
  //FIRST NAME VALIDATION
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  //LAST NAME VALIDATION
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  // EMAIL VALIDATION
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  // Message Validation
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  //NAME INPUT HANDLER
  const handleFirstNameInputChange = (e) => {
    setEnteredFirstName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredFirstNameIsValid(true);
    }
  };
  // LAst NAME INPUT HANDLER
  const handleLastNameInputChange = (e) => {
    setEnteredLastName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredLastNameIsValid(true);
    }
  };

  // EMAIL INPUT HANDLER
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setEmailIsValid(true);
    }
  };

  //MESSAGE INPUT HANDLER
  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setMessageIsValid(true);
    }
  };

  //BLUR INPUT HANDLE- FIRES ON INPUT LOSING FOCUS
  const firstNameInputBlurHandler = () => {
    setEnteredFirstNameTouched(true);
    if (enteredFirstName.trim() === "") {
      setEnteredFirstNameIsValid(false);
    }
  };

  //BLUR INPUT HANDLE- FIRES ON INPUT LOSING FOCUS
  const lastNameInputBlurHandler = () => {
    setEnteredLastNameTouched(true);
    if (enteredLastName.trim() === "") {
      setEnteredLastNameIsValid(false);
    }
  };
  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
    if (!email.includes("@")) {
      setEmailIsValid(false);
    }
  };
  const messageInputBlurHandler = () => {
    setMessageIsTouched(true);
    if (message.trim() === "") {
      setMessageIsValid(false);
    }
  };

  // FORM SUBMISSION
  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredFirstNameTouched(true);

    //WITH useRef
    // const enteredValue = nameInputRef.current.value;
    if (enteredFirstName.trim() === "") {
      setEnteredFirstNameIsValid(false);
      return;
    }
    if (enteredLastName.trim() === "") {
      setEnteredLastNameIsValid(false);
      return;
    }
    if (!email.includes("@")) {
      setEmailIsValid(false);
      return;
    }
    if (message.trim() === "") {
      setMessageIsValid(false);
      return;
    }
    setEnteredFirstNameIsValid(true);
    setEnteredLastNameIsValid(true);
    setEmailIsValid(true);
    setMessageIsValid(true);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEmail("");
    setMessage("");
  };

  const firstNameInputIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;
  const nameInputClasses = firstNameInputIsInvalid
    ? "form-input invalid"
    : `form-input`;
  const lastNameInputIsInvalid =
    !enteredLastNameIsValid && enteredLastNameTouched;
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-input invalid"
    : `form-input`;

  const emailInputIsInvalid = !emailIsValid && emailIsTouched;
  const emailInputClasses = emailInputIsInvalid
    ? "form-input invalid"
    : `form-input`;
  const messageInputIsInvalid = !messageIsValid && messageIsTouched;
  const messageInputClasses = messageInputIsInvalid
    ? "form-input invalid"
    : `form-input`;

  return (
    <section className="form">
      <div className="heading">
        <h2 className="form-heading">Contact Me</h2>
        <p className="heading-text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form
        action="contact-form"
        className="form-class"
        onSubmit={formSubmitHandler}
      >
        <div className="flex">
          <div className="form-group flex-item">
            <label className="form-label" htmlFor="first_name">
              First Name
            </label>
            <div className={nameInputClasses}>
              <input
                placeholder="Enter your first name"
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                onChange={handleFirstNameInputChange}
                value={enteredFirstName}
                onBlur={firstNameInputBlurHandler}
              />
              {firstNameInputIsInvalid && (
                <p className="form-input error error-text">
                  First Name field cannot be empty
                </p>
              )}
            </div>
          </div>

          <div className="form-group flex-item">
            <label className="form-label" for="last_name">
              Last Name
            </label>
            <div className={lastNameInputClasses}>
              <input
                placeholder="Enter your last name"
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                onChange={handleLastNameInputChange}
                value={enteredLastName}
                onBlur={lastNameInputBlurHandler}
              />
              {lastNameInputIsInvalid && (
                <p className="form-input error error-text">
                  Last Name field cannot be empty
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" for="email">
            Email
          </label>
          <div className={emailInputClasses}>
            <input
              placeholder="yourname@email.com"
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleEmailInputChange}
              value={email}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsInvalid && (
              <p className="form-input error error-text">Enter a valid email</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" for="message">
            Message
          </label>
          <div className={messageInputClasses}>
            <textarea
              placeholder="Send me a meesage and I'll reply you as soon as possible..."
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="form-control"
              onChange={handleMessageInputChange}
              value={message}
              onBlur={messageInputBlurHandler}
            ></textarea>
            <img
              src="images/icon-error.svg"
              className="error-icon"
              alt="error-img"
            />
            {messageInputIsInvalid && (
              <p className="form-input error error-text">
                Please enter a message
              </p>
            )}
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
