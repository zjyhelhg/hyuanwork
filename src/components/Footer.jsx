import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  // footer section
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 md:px-18 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* brand column  */}
          <div className=' col-span-12 lg:col-span-4 '>
            {/* logo */}
            <div className='flex items-center gap-1 mb-6 '>
              <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 rounded-full bg-blue-600 ml-5 opacity-70 hover:opacity-100 transition-opacity'></div>
                <div className='w-4 h-4 rounded-full bg-red-600 -ml-2 opacity-70 hover:opacity-100  transition-opacity  '></div>
              </div>
              <span className='text-xl  font-semibold ml-1  '>The Next Design</span>
            </div>


            <p className='text-gray-600  mb-6  px-4'>
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            <div className='flex gap-4 px-4'>
              <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600  rounded-full  flex items-center justify-center
              transition-all duration-300 text-gray-600 hover:text-white 
              '><FaFacebookF></FaFacebookF></a>

              <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600  rounded-full  flex items-center justify-center
              transition-all duration-300 text-gray-600 hover:text-white 
              '><FaTwitter></FaTwitter></a>

              <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600  rounded-full  flex items-center justify-center
              transition-all duration-300 text-gray-600 hover:text-white 
              '><FaLinkedin></FaLinkedin></a>
            </div>
          </div>

          {/* footer navigation items */}
          <div className='col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
              {
                Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <div key={category}>
                    <h3 className='text-lg font-semibold mb-4 uppercase'>{category}</h3>
                    <ul className='space-y-2'>
                      {links.map((link,index) => (
                        <li className=''>
                          <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>


        {/* footer bottom section */}
        <div className='border-t mt-12 border-gray-200 py-6'>
          <div className='flex flex-col md:flex-row justify-between'>
            <p className='text-gray-600 text-sm'>Copyright @ {new Date().getFullYear()} codetutorbd.com</p>
            <p className='text-gray-600 text-sm'>Created by Md All Manun</p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer