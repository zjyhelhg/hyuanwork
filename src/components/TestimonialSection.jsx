import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { textVariant, scale } from '../utils/motion';


const TestimonialSection = () => {

  const testimonials = [
    {
      id: 1,
      name: "张金元",
      image: "https://inn.proginn.com/useralbum/1052536/avatar10525361744544707.jpg!mediumicon",
      text: " 衷于打造创新且用户友好的数字产品。拥有丰富的 Web 与移动端开发经验，曾参与开发智能电商应用、企业级后台管理系统及功能型网站如「浩元北极星」等项目。熟练掌握 HTML、CSS、JavaScript、TypeScript、Vue2/Vue3、Nuxt.js、Tailwind CSS 等主流前端技术，同时对 Prisma 和 Firebase 等后端服务也有深入实践 。我始终关注用户体验与产品细节，致力于用代码实现创意与价值的融合。",
    },
    {
      id: 2,
      name: "钱昊",
      image: "https://inn.proginn.com/useralbum/1074594/avatar10745941733019905.jpg!mediumicon",
      text: "我熟练掌握 HTML、CSS、JavaScript 三大前端核心技术，精通 Vue2、Vue3、React 等主流框架，熟悉 Node.js 及 MongoDB 非关系型数据库。可构建结构清晰、样式精美、交互流畅的网页界面。基于 Vue.js 框架，我能快速搭建高效单页面应用。灵活运用 Vue Router 进行路由管理，Vuex 实现全局状态管理，并通过自定义指令、过滤器拓展功能，有效提升开发效率与代码质量；同时，能熟练使用 React 进行组件化开发，结合 Node.js 与 MongoDB 实现前后端数据交互与存储，保障项目全流程开发。",
    },
    {
      id: 3,
      name: "王宇航",
      image: "https://stacdn.proginn.com/image/usericon/9.png",
      text: "作为一名全栈工程师，我专注于开发高效、可扩展的数字产品，致力于从用户需求到技术实现的全链条开发。我熟练掌握Nuxt.js和Supabase等前端与后端技术栈，并负责过包括用户模块、帖子模块、评论模块、点赞模块、通知模块、聊天模块、关注及好友模块、多语言模块等功能的开发和优化。在项目中，我特别关注SSR优化、移动端适配及多端打包，力求在性能和用户体验上达到最佳平衡。此外，我在开源社区活跃，参与并维护多个项目。开发过的功能包括但不限于Python爬虫抓取、Electron前端可视化、IPC多线程通信等。我相信通过技术创新和持续学习，不断为项目带来新的活力与创意。.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },

  ];


  return (
    <section className='max-w-7xl py-30  mx-auto px-4 mt-4 md:mt-8   ' id='testimonials'>
      <motion.div
        variants={textVariant(0.4)}
        initial='hidden'
        whileInView='show'
        className='mb-10 text-center '>
        <h2 className=' font-bold  md:text-4xl text-3xl mb-6'>我们的展示</h2>
        <p className='text-gray-600 text-2xl'>What our happy programmer say？</p>
        <p className='text-gray-600 mt-2'>无时无刻等你来加入！</p>
      </motion.div>

      {/* testimonials cards */}
      <div className='relative'>

        {/* swiper cards */}

        <Swiper

          navigation={
            {
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }
          }
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12 "
        >
          {
            testimonials.map((testimonial, index) => (

              <SwiperSlide key={index} className=' swiper-slide  h-[268px] md:py-8 py-2  bg-white  shadow-lg ' >
                <motion.div
                  variants={scale(0.2)}
                  initial='hidden'
                  whileInView='show'
                  className='flex flex-col  justify-center  items-center'>

                  <div className='w-24 h-24 container  mb-3  mx-auto'>
                    <img className='rounded-full w-full h-full object-cover' src={testimonial.image} alt="" />
                  </div>


                  <div className='flex justify-center items-center mb-3 '>
                    {
                      [...Array(5)].map((_, starIndex) => (
                        <span key={starIndex} className='text-yellow-500  size-5'>⭐</span>
                      ))
                    }
                  </div>
                  <h3 className='text-xl font-semibold  mt-2  mb-4'>{testimonial.name}</h3>

                  <p className='text-gray-500 px-2'>{testimonial.text}</p>


                </motion.div>

              </SwiperSlide>
            ))
          }

        </Swiper>




        {/* navigational button */}

        <div className='  flex gap-8  justify-center mt-1'>
          <button className='w-12 swiper-button-prev-custom  h-12 rounded-full duration-300  border border-gray-200 flex items-center justify-center  hover:text-white hover:bg-blue-600 cursor-pointer transition-all'>
            <BsChevronLeft className='size-6'></BsChevronLeft>
          </button>
          <button className='swiper-button-next-custom  w-12 h-12 rounded-full duration-300 border border-gray-200 flex items-center justify-center  hover:text-white hover:bg-blue-600 cursor-pointer transition-all'>
            <BsChevronRight className='size-6'></BsChevronRight>
          </button>
        </div>



      </div>

    </section>
  )
}

export default TestimonialSection