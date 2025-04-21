import React from 'react'
import scheduleImage from '../assets/stats.webp'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'


const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-24 items-center  '>
        {/* left */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView='show'
 className='w-full md:w-1/2'>
          <img src={scheduleImage} alt="Schedule Image" />
        </motion.div>


        {/* right */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView='show'
        className='w-full md:w-1/2'>
          <p className='text-orange-500 font-semibold' >SCHEDULE</p>
          <h2 className='text-3xl md:text-4xl leading-tight mt-4 mb-3 font-semibold text-neutral-900'>Streamline Your Business
            With Smart Scheduling Solution
          </h2>

          <p className='text-gray-600 mt-5 mb-4'>Take control of your time and boost productivity with our intelligent scheduling system.
            Automate appointments, manage team availabbility, and deliver exptional customer experiences
            through seamless calendar management.
          </p>

          <a href="#" className='flex  items-center gap-2 hover:gap-4 transition-all text-blue-600 font-semibold '>

            Explore Scheduling features
            <IoIosArrowRoundForward className='size-8' />
          </a>
        </motion.div>

      </div>

    </section>
  )
}

export default ScheduleSection