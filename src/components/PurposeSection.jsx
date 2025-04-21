import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn,  textVariant } from '../utils/motion'

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ]
  return (
    <div
    
    className='sm:px-6 md:px-8 px-4 w-full bg-gray-50'>

      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          {/* grid 1 */}
          <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView='show'
          className=' py-10 mt-10'>
            <p className='text-medium text-purple-600 font-semibold mb-3'>ACHIEVE MORE</p>
            <h2 className='text-3xl text-gray-900 md:text-4xl md:w-4/5 w-full font-bold '>Purpose of a convoy is keep your team</h2>
          </motion.div>
          {/* grid 2 */}
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView='show'
          className='flex gap-3 md:col-span-2  col-span-1  justify-between'>
            {
              features.map((feature, index) => (
                <div key={index} className='flex gap-2 mt-6 md:py-20  py-0 '>
                  <div className='rounded-lg w-12 py-3 h-12  flex items-center justify-center'>{feature.icon}</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 text-xl mb-2'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>

                </div>


              ))}

          </motion.div>


        </div>

      </div>

    </div>
  )
}

export default PurposeSection