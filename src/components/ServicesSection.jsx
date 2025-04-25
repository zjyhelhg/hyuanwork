import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../assets/motion'

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "网页设计",
      description: "一心为众，众心为一，总是准备就绪。是否想要一个属于自己的个人网站？",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "广告创意",
      description: "匠心开发，助力企业智启未来。",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "移动端设计",
      description: "专注移动体验，赋能指尖未来。",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Web 安全服务",
      description: "网站防护升级，守护数据安全。",
      link: "#learn-more"
    }
  ]

  return (
    <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-28 ' id='services'>
      <div className='   lg:flex '>

        {/* header */}
        <div className='mt-20'>
          <motion.h2
            variants={textVariant(0.4)}
            initial='hidden'
            whileInView='show'
            className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>我们的服务类型，多元技术服务，助力企业数字升级</motion.h2>
          <motion.p
            variants={textVariant(0.4)}
            initial='hidden'
            whileInView='show'
            className='text-gray-600 text-lg mb-4 md:w-4/5'>讨论你的目标，确定成功的标准，找出问题</motion.p>

          <div className='space-y-4'>
            <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView='show'
            >
              <div className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-indigo-100 rounded-full flex justify-center items-center'>
                  <div className='w-2.5  h-2.5 bg-indigo-600 rounded-full'></div>
                </div>

                <span className='text-gray-600'>用户体验设计内容策略</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-indigo-100 rounded-full flex justify-center items-center'>
                  <div className='w-2.5  h-2.5 bg-indigo-600 rounded-full'></div>
                </div>

                <span className='text-gray-600'>优化界面内容，提升用户体验感。</span>
              </div>
            </motion.div>
            <motion.button
             
               variants={fadeIn('right', 0.4)}
               initial='hidden'
               whileInView='show'
            className='mt-8 bg-indigo-600 text-white px-8 py-3  cursor-pointer rounded-full hover:bg-indigo-700 transition-colors'>
              
              <a href="#new">Get Start</a>
            </motion.button>
          </div>
        </div>




        {/* service cards */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView='show'
        className='grid grid-cols-1 ml-19 md:grid-cols-2 gap-6 mt-10'>
          {
            services.map((service, index) => (
              <div key={index} className='bg-white hover:scale-105 w-72 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md'>
                <div className='my-2'>{service.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-gray-600 leading-tight mb-5 '>{service.description}</p>
                <a href={service.link} className='text-indigo-600  font-medium hover:text-indigo-700 transition-all '>LEARN MORE</a>
              </div>
            ))
          }
        </motion.div>
      </div>


    </section>
  )
}

export default ServicesSection