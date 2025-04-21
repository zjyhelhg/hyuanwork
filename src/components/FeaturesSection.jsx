import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant} from '../utils/motion'

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]
  return (
    <section className='max-w-7xl   mx-auto px-4 py-30' id='about'>
      {/* heading text */}
      <motion.div
      variants={textVariant( 0.4)}
      initial='hidden'
      whileInView='show'
      className='text-center mb-6'>
        <h2 className='text-3xl font-bold mb-4'>How can we help your business?</h2>
        <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
      </motion.div>

      {/* features box */}
      {
        <motion.div
        variants={textVariant(0.6)}
        initial='hidden'
        whileInView='show'
        className='grid grid-cols-1 md:grid-cols-3  gap-8  '>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col justify-center items-center mt-6 '>
              <div className='w-24 h-24 rounded-full mb-6 flex  items-center justify-center' style={{
                backgroundColor: index === 0 ? '#F1EFFD' : index === 1 ? '#FEE7E7' : '#FFF3E4'
              }}>
                <div className='text-3xl'>{feature.icon}</div>
              </div>
              <h3 className='text-2xl font-medium mb-3' >{feature.title}</h3>
              <p className='text-gray-600 text-center  px-3'>{feature.description}</p>
            </div>
          ))}
        </motion.div>
      }


      {/* button */}

      <motion.div
       variants={textVariant( 0.4)}
       initial='hidden'
       whileInView='show'
      className='text-center mt-19'>
        <button className='relative   bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors px-8 py-3  cursor-pointer'>
          Become a Partner
          <div className='absolute rounded-full    -z-10 top-0 left-0 w-full h-full bg-blue-500/80 blur-xl  '></div>
        </button>
      </motion.div>


    </section>
  )
}

export default FeaturesSection