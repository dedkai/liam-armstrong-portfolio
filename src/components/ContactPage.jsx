import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const hasEmptyField = Object.values(formData).some(
        (fieldValue) => fieldValue.trim() === ""
      );

      if (hasEmptyField) {
        setFormMessage("Please complete all fields before submitting.");
        return;
      }

      console.log("Form submitted successfully:", formData);

      setFormMessage("Thank you! Your message has been received.");

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        message: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormMessage(
        "An error occurred while submitting the form. Please try again."
      );
    }
  }

  return (
    <section className="section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>Contact Me</h1>

          <p>
            Complete the form and I will review your message as soon as
            possible.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:liamninearmstrong@gmail.com">
                liamninearmstrong@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong> <a href="tel:+14319986868">4319986868</a>
            </p>

            <p>
              <strong>Location:</strong> Scarborough, Toronto, Ontario, Canada
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          />

          <label htmlFor="lastName">Last Name</label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          />

          <label htmlFor="phoneNumber">Contact Number</label>

          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Example: 4319986868"
            required
          />

          <label htmlFor="emailAddress">Email Address</label>

          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Example: liamninearmstrong@gmail.com"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          />

          <button className="button primary-button" type="submit">
            Send Message
          </button>

          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>
      </div>
    </section>
  );
}
