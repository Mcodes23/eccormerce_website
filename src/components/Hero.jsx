// eslint-disable-next-line no-unused-vars
import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${assets.hero_img})`,
      }}
    >
      <div className="ml-8 max-w-lg">
        <h1 className="prata-regular text-white text-5xl font-bold mb-4">
          Unleash Your Desires
        </h1>
        <p className="text-white text-lg mb-6">
          Explore our exclusive collection of premium sex toys designed for
          pleasure and intimacy. Elevate your experiences and discover new
          sensations with our carefully curated products.
        </p>
        <div className="flex space-x-4">
          <button className="border border-white text-white px-6 py-3 hover:bg-white hover:text-pink-500 transition duration-300">
            Shop Now
          </button>
          <button className="border border-white text-white px-6 py-3 hover:bg-white hover:text-pink-500 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
