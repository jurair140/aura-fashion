import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetters';


function Contact() {




  return (
    <>
      {/* Contact Page Title */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Info Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.p_img7} className="w-full max-w-[350px]" alt="Contact Export Surplus" />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-xl">Visit Our Store</p>
          <p className="text-gray-500">
            Ram Moham Road,<br />
            Calicut, Kerala, India – 673004
          </p>

          <p className="text-gray-500">
            Phone / WhatsApp: <strong>+91 89214 31498</strong><br />
            Group: <a href="https://chat.whatsapp.com/HhdYOCmD1s7LCH3mQYHVll" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Join Our WhatsApp Group</a>
          </p>

          <p className="text-gray-500">
            Email: exportleathershoes@gmail.com
          </p>

          <p className="font-semibold text-xl pt-4">Careers at Export Surplus</p>
          <p className="text-gray-500">
            Interested in working with us? We're always looking for passionate individuals who value quality and style.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Opportunities
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />
    </>
  );
}

export default Contact;
