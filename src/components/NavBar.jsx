import React from 'react'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { fadeIn } from '../utils/motion'
import { motion } from "framer-motion"
 
const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [acticeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: '#home', label: '首页' },
    { href: '#about', label: '技能需求' },
    { href: '#services', label: '提供服务' },
    { href: '#testimonials', label: '关于团队' }
  ]
  return (
    <motion.nav
      variants = {fadeIn('down',0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}

        className='top-0 h-[90px] left-0 right-0 border-b shadow-md  z-50 backdrop-blur-md border-gray-100 fixed  bg-white/90 '>
      <div className='w-full   mx-auto flex  items-center justify-between  lg:px-25   md:h-20 h-16  '>

        {/* logo Part */}
        <div className='flex items-center gap-1 cursor-pointer '>
          <div className='w-4 h-4 rounded-full bg-blue-600 ml-5 opacity-70 hover:opacity-100 transition-opacity'></div>
          <div className='w-4 h-4 rounded-full bg-red-600 -ml-2 opacity-70 hover:opacity-100  transition-opacity  '></div>
        </div>

        {/* mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-3' >
          {
            isMenuOpen ? <HiX className='size-6'></HiX> : <HiMenu className='size-6'></HiMenu>
          }

        </button>


        {/* menu navList Part */}
        <div className='hidden md:flex gap-10'>
          {
            navLinks.map((link, index) => (
              <a onClick={() => setActiveLink(link.href)} key={index} href={link.href}
                className={` ${acticeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"} text-sm font-medium relative after:bottom-0  after:absolute after:left-0  after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all`}
              >
                {link.label}
              </a>
            ))
          }
        </div>

        {/* get in touch Button */}
        <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-300 '>
          <a href="#new">取得联系</a>
        </button>

      </div>

      {/* mobile menu items */}
      {
        isMenuOpen && (

          <div className=' md:hidden   bg-white border-t border-gray-100 py-4'>
            <div className='container  mx-auto space-y-4  ml-3'>
              {
                navLinks.map((link, index) => (
                  <a key={index} onClick={() => {
                    setActiveLink(link.href)
                    setIsMenuOpen(false)
                  }} className={`block   ${acticeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"} font-medium py-2 text-sm`} href={link.href}>{link.label}</a>

                ))
              }
            </div>

            <button className='w-full bg-blue-600 text-white px-6 py-2.5 mt-5   rounded-lg text-sm  hover:bg-blue-700 transition-all hover:shadow-lg  hover:shadow-blue-300'>
              <a href="#new">Get in touch</a>
            </button>
          </div>

        )
      }
    </motion.nav>


  )
}

export default NavBar