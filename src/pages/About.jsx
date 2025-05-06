import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetters';

const About = () => {
  return (
    <>
      {/* Header */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Intro Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.p_img12} className="w-full max-w-[350px]" alt="About Export Surplus" />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <p>
            Welcome to <strong>Export Surplus Leather Shoes</strong>, your destination for premium leather goods. Located in Calicut, we specialize in original export surplus leather shoes, bags, wallets, and belts — crafted for those who appreciate timeless elegance and lasting quality.
          </p>
          <p>
            We believe in the value of authenticity. Every piece we offer represents skilled craftsmanship, honest sourcing, and refined style. Whether you're investing in your everyday essentials or elevating your wardrobe with a bold new statement, our products are built to last and made to impress.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Export Surplus, our mission is simple: <strong>“Believe in best. Believe in original.”</strong> We are committed to delivering premium leather products that stand out for their durability, comfort, and timeless appeal — all while making them accessible to customers across India.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Unmatched Leather Quality</b>
          <p>
            We handpick export surplus products known for their genuine leather and international-grade finish. Every item is thoroughly inspected for authenticity and build.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Nationwide Delivery</b>
          <p>
            From Calicut to every corner of India, we ensure quick and reliable shipping so you can enjoy our premium leather goods no matter where you are.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Personalized Support</b>
          <p>
            Need help? Reach us directly via <strong>WhatsApp: 8921431498</strong>. Our support team is always ready to guide you with product details, sizing, or order updates.
          </p>
        </div>
      </div>

      {/* <NewsLetter /> */}
    </>
  );
};

export default About;
