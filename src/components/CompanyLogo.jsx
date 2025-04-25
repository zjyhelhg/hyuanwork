import React from 'react'
import tailwindCSS from '../assets/tailwindCSS.png'
import nextjslogo from '../assets/nextjs-logo.webp'
import nuxt from '../assets/logo-green-black.png'
import vuelogo from '../assets/vueLogo.png'
import supabase from '../assets/supabase.png'
import prismalogo from '../assets/prismalogo.png'
import iside from '../assets/iside.png'
const companyLogo = () => {
  const logos = [prismalogo,tailwindCSS, nextjslogo, nuxt, vuelogo, supabase,iside]
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