'use client'
// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='text-gray-600 min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-xl flex flex-col md:flex-row md:items-center p-4'>
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center md:text-left md:w-1/2'
        >
          <motion.h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
            Discover the Perfect Wallet
          </motion.h1>
          <motion.p className='text-lg md:text-xl lg:text-2xl mb-8'>
            Explore our curated collection of stylish wallets for men and women.
          </motion.p>
          <motion.button
            className='bg-white text-blue-500 px-6 py-3 font-bold text-lg hover:bg-blue-700 hover:text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Placeholder image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='md:w-1/2 md:pl-8'
        >
          <img
            src='https://images.pexels.com/photos/1261732/pexels-photo-1261732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Wallet Placeholder'
            className='w-full h-auto rounded-md'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
