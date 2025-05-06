import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LimitedDeals from '../components/LimitedDeals';
import bannerImg from '../assets/limited-deal-banner.jpg';

const LimitedDealPage = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const endTime = new Date().getTime() + 12 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnitVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className=" text-white">
      {/* Hero Banner Section */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div
          className="relative z-10 text-center max-w-3xl px-6 py-10 bg-black/50 rounded-2xl shadow-2xl border border-white/10"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-serif tracking-wider uppercase mb-4">
            Limited Time Offer
          </h1>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-6 rounded-full" />
          <p className="text-md md:text-lg text-gray-300 font-light mb-8 leading-relaxed">
            Discover timeless craftsmanship in every detail — premium leather shoes, bags, belts, and wallets curated for the modern connoisseur.
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 text-2xl font-mono text-gray-100 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700 shadow-inner">
            {['hours', 'minutes', 'seconds'].map((unit, i) => (
              <motion.span
                key={unit}
                variants={timeUnitVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {String(timeLeft[unit]).padStart(2, '0')}
                {i < 2 && ':'}
              </motion.span>
            ))}
            <span className="ml-2 text-sm text-gray-400">hrs left</span>
          </div>

          {/* CTA Button */}
          <button
            className="mt-8 inline-block px-8 py-3 text-sm md:text-base font-semibold uppercase tracking-wider rounded-full border border-gray-400 text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* Limited Deals Section */}
      <div data-aos="fade-up">
        <LimitedDeals />
      </div>
    </div>
  );
};

export default LimitedDealPage;
