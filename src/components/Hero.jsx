import React from 'react'
import heroImage from '../assets/hero-image.png'
import { motion } from 'framer-motion'
import { fadeIn ,textVariant} from '../utils/motion'
const Hero = () => {
  return (
    <section id='home' className=' justify-between container flex flex-col md:flex-row  mx-auto pt-44 pb-6 lg:px-8 sm:px-6'>
      {/* left side */}
      <div className=' pl-10 space-y-10  md:w-1/2 w-full'>
        {/* star icon */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView="show"

        >
          <div className='group-hover:scale-110 flex items-center gap-2 w-fit px-4 py-2 bg-gray-100 rounded-4xl cursor-pointer hover:bg-gray-200  transition-all'>
            <span className='hover:scale-120'>⭐</span>
            <span className='text-sm font-medium'>Jump start your growth</span>
          </div>
        </motion.div>

        <motion.h1 
        variants = {textVariant(0.3)}
        initial = 'hidden'
        whileInView = "show"
        
        className='text-4xl mt-10 font-bold md:text-5xl lg:text-5xl leading-tight'>欢迎来到
          <span className='text-blue-500 inline-block relative'> 昊元工作室
            <span className='absolute w-full bottom-0 h-0.5 left-0 bg-gray-200/80'></span>
          </span><span className='mt-2 animate-pulse'>⏰</span><br />
          <span className='text-3xl'>Welcome to Haoyuan Studio</span>
        </motion.h1>

        <motion.p
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView='show'
        className='max-w-xl md:text-xl text-gray-600'>获得最准确的线索，销售人员培训和转换，工具和更多-所有在同一个账单。
 
        </motion.p>

        <motion.div 
         variants={fadeIn('right', 0.4)}
         initial='hidden'
         whileInView='show'
        className='flex max-w-md  gap-1 mb-20'>
          <input type="text" placeholder='Enter your email' className='flex-1 sm:-mr-2 px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all' />
          <button className='bg-blue-600 text-white px-8 py-4 cursor-pointer hover:bg-blue-700 shadow-lg hover:shadow-blue-400 rounded-lg text-[18px] ml-5'><a href="#new">→</a> </button>
        </motion.div>


      </div>


      <motion.div
       variants={fadeIn('left', 0.4)}
       initial='hidden'
       whileInView='show'
      className=' md:w-1/2 w-full  -mt-10 pl-0  md:pl-12 '>
        <div className='relative'>
          <img src={heroImage} alt="hero Image" className='rounded-lg relative z-10 hover:scale-105  transition-all' />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero