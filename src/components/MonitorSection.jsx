import React from 'react'
import monitorCardImg from '../assets/monitor-card.webp'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'



const MonitorSection = () => {

  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-24 items-center  '>
        {/* left */}

        <motion.div
           variants={fadeIn('left', 0.4)}
                  initial='hidden'
                  whileInView='show'
        className='w-full md:w-1/2'>
          <p className='text-green-500 font-semibold' >MONITOR</p>
          <h2 className='text-3xl md:text-4xl leading-tight mt-4 mb-3 font-semibold text-neutral-900'>Introducing best mobile Carousel
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

        {/* right */}
        <motion.div
           variants={fadeIn('right', 0.4)}
                  initial='hidden'
                  whileInView='show'
        className='w-full md:w-1/2'>
          <img src={monitorCardImg} alt="MonitorCard Image" />
        </motion.div>
      </div>

    </section>
  )

}

export default MonitorSection