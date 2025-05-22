import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3vsymo8',       
      'template_1lk5jpq',      
      form.current,
      'bWat0ctF1wEZ3gKED'        
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 mb-48">
      <input
        type="text"
        name="from_name"
        placeholder="Full Name"
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Your Email"
        className="w-full p-3 border rounded-md"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        className="w-full p-3 border rounded-md"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-green-800 text-white py-2 px-4 rounded-md w-full"
      >
        Send Message
      </button>
    </form>
  );
}
