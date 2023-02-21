import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMP, form.current, process.env.REACT_APP_EMAIL_KEY)
      .then((result) => {
          console.log(result.text);
          window.alert("Message was successfully sent!")
          window.location.reload();
      }, (error) => {
          
          console.log(process.env.REACT_APP_EMAIL_SERVICE);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>- Name -</label>
      <input type="text" name="user_name" id="input"/>
      <label id="input">- Email -</label>
      <input type="email" name="user_email" id="input"/>
      <label id="input">- Message - </label>
      <textarea name="message" id="input"/>
      <input type="submit" value="Send" id="input"/>
    </form>
  );
};