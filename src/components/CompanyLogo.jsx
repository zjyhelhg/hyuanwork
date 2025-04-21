import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const companyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint]
  return (

    <div className='w-full py-20  mx-auto overflow-hidden container flex flex-col sm:flex-row items-start    '>
      
      <div className='w-[300px]  shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0'>Proud partner at <br /> Hubspor & Segment</div>
      <div className='flex animate-marquee  mt-3   whitespace-nowrap'>
        {logos.map((logo,index) => (
          
            <img src={logo} key={index} alt="company logo" className='mx-12  w-36 h-8 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all' />            
          
        ))}

        {/* duplicate logos */}
        {logos.map((logo,index) => (
          
          <img src={logo} key={`duplicate-${index}`} alt="company logo" className='mx-12  w-36 h-8 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all' />            
        
      ))}

      </div>

    </div>
  )
}

export default companyLogo