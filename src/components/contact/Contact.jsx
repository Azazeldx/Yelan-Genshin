import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Yelan@gmail.com</h5>
            <a href="mailto:dimas63736@gmail.com" target="_blank">
              Send A Massage
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Yelan</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">
              Send A Massage
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>123456</h5>
            <a href="https://api.whatsapp.com/send?phone=083114854316" target="_blank">
              Send A Massage
            </a>
          </article>
        </div>
        {/* end of contact section */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Messege" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Messege
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
