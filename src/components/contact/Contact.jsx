import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ptqnn44",
        "template_h85trpp",
        form.current,
        "nU5f_EIxIWYlZj42_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>okanirfan07@gmail.com</h5>
            <a href="mailto:okanirfan07@gmail.com">Send Message</a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={(sendEmail, alert("Your Message Has Been Sent!"))}
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message "
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
