import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import {  textVariant, scale  } from '../utils/motion';


const TestimonialSection = () => {

  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
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
        <h2 className=' font-bold  md:text-4xl text-3xl mb-6'>What our happy client say</h2>
        <p className='text-gray-600'>Things that make it the best place to start trading</p>
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