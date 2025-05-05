import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <div className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={assets.hero_video}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay (optional for contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center h-full text-center px-4 text-white">
        <div className="max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="w-8 md:w-11 h-[2px] bg-white" />
            <p className="font-medium text-sm md:text-base">Welcome</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          Premuim leather goods seller
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
