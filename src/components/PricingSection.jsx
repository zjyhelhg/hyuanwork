import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { textVariant,fadeIn } from '../utils/motion'



const PricingSection = () => {
  const [productCount, setProductCount] = useState(1)


  // calculate product price base on product count
  const starterPrice = Math.round(4000 * (productCount / 50))
  const businessPrice = Math.round(7500 * (productCount / 50))

  return (
    <section className='py-20 px-4' >
      <div className='mx-auto max-w-6xl'>
        <motion.h2
        variants={textVariant(0.4)}
        initial='hidden'
        whileInView='show'
        className='text-3xl md:text-4xl  text-center font-bold mb-14'>Pricing</motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2  gap-9 mb-12'>
          {/* starter plan */}
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView='show'
          className='bg-white rounded-lg shadow-lg p-8'>
            <div className='text-xl text-gray-600 mb-4'>Starter</div>
            <h3 className='text-3xl   font-bold mb-6 mt-4'>${starterPrice}/mo</h3>
          </motion.div>

          {/* Business plan */}
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView='show'
          className='bg-white rounded-lg shadow-lg p-8'>
            <div className='text-xl text-gray-600 mb-4'>Business</div>
            <h3 className='text-3xl  font-bold mb-6 mt-4'>${businessPrice}/mo</h3>
          </motion.div>

        </div>

        <div className='max-w-xl mx-auto'>
          <motion.p 
          variants={textVariant(0.4)}
          initial='hidden'
          whileInView='show'
          className='text-center text-gray-600 mb-5'>{productCount} Products</motion.p>
          <motion.div
          variants={textVariant(0.4)}
          initial='hidden'
          whileInView='show'
          className='relative px-4'>
            <div className='flex justify-center  items-center gap-2'>
              <span className='text-xs sm:text-sm text-gray-500'>1</span>
              <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' type="range" min={1} max={50} value={productCount} onChange={(e) => setProductCount(parseInt(e.target.value))} />
              <span className='text-xs sm:text-sm text-gray-500'>50</span>
            </div>
          </motion.div>

          <motion.div
          variants={textVariant(0.4)}
          initial='hidden'
          whileInView='show'
          className='text-center mt-12 mb-9'>
            <p className='text-gray-600 mb-4 font-medium text-xl'>Ready to Get Started?</p>
            <button className='bg-blue-500 rounded-lg hover:bg-blue-600 shadow-lg text-white transition-all  px-6 py-3  cursor-pointer '>Get Started</button>
          </motion.div>



        </div>

      </div>
    </section>

  )
}

export default PricingSection