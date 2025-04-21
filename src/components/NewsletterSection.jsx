import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeIn  } from '../utils/motion'
const NewsletterSection = () => {
  return (
    <motion.section
    variants={fadeIn('right', 0.4)}
    initial='hidden'
    whileInView='show'
    className='container mx-auto px-4 sm:px-6 lg:px-9 py-20 '>
      <div className='bg-blue-600   rounded-2xl overflow-hidden'>
        <div className='relative md:px-16 py-16 md:py-24'>
          {/* gradient backgound */}
          <div className=' clip-path-slant absolute top-0 right-0 w-1/2 h-full bg-blue-700 hidden  md:block'></div>

          <div className='relative flex flex-col lg:flex-row justify-between items-center lg:gap-12 gap-8 '>
            <div className=' max-w-lg text-center md:text-left   '>
              {/* left content */}
              <h2 className='text-2xl  font-semibold text-white lg:text-4xl sm:text-3xl  mb-5'>Subscribe newsletter</h2>
              <p className='text-blue-100 text-sm  sm:text-base '>Best cooks and best deliver guys all at your service. Hot tasty food</p>

            </div>
            {/* right content */}
            <div className='flex flex-col sm:flex-row sm:gap-0 text-left'>
              <input type="email" placeholder='Enter your email address'
                className='w-full sm:w-auto h-auto md:w-80 px-4  bg-white sm:py-4 sm:rounded-l-xl sm:rounded-r-none  focus:outline-none rounded-xl'
              />

              <button className='w-full flex bg-green-500 sm:w-auto cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-none sm:rounded-r-lg '>
                <span>Discover</span>
                <HiArrowRight className='size-5'></HiArrowRight>
              </button>
            </div>
          </div>


        </div>

      </div>


      <style>
        {
          `.clip-path-slant {
           clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }`
        }
      </style>
    </motion.section>
  )
}

export default NewsletterSection