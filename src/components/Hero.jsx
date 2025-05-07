import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';



function Hero() {
  const collections = [
    { img: assets.p_img2_2, name: 'Shoes', path: '/collection?sub=Footwear' },
    { img: assets.p_img37, name: 'Bags', path: '/collection?sub=Bags' },
    { img: assets.p_img39, name: 'Belts', path: '/collection?sub=Belt' },
    { img: assets.p_img31, name: 'Wallets', path: '/collection?sub=Wallet' },
  ];

  return (
    <>
      {/* Collection section at the top */}
      <div className=" md:px-8 h-[90vh] flex items-center  bg-white">
        {/* Mobile slider */}
      

      <div className="flex gap-4 overflow-x-auto lg:hidden pb-10">
          {collections.map((item, index) => (
            <Link to={item.path} key={index} className="min-w-[300px]">
              <div className="w-full h-full  overflow-hidden shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-gray-700">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <Link to={item.path} key={index} >
              <div className="w-full h-full  overflow-hidden shadow-lg group">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-2 text-base font-semibold text-gray-700">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section with video background */}
      <div className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={assets.hero_video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center h-full text-center px-4 text-white">
          <div className="max-w-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="w-8 md:w-11 h-[2px] bg-white" />
              <p className="font-medium text-sm md:text-base">Welcome</p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Premium Leather Goods Seller
            </h1>
            <Link to={'/collection'}>
              <div className="flex items-center justify-center gap-2 mt-4">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[2px] bg-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
