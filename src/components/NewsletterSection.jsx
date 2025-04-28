// import React from 'react'
// import { HiArrowRight } from 'react-icons/hi'
// import { motion } from 'framer-motion'
// import { fadeIn  } from '../utils/motion'
// const NewsletterSection = () => {
//   return (
//     <motion.section  id='new'
//     variants={fadeIn('right', 0.4)}
//     initial='hidden'
//     whileInView='show'
//     className='container mx-auto px-4 sm:px-6 lg:px-9 py-20 '>
//       <div className='bg-blue-600   rounded-2xl overflow-hidden'>
//         <div className='relative md:px-16 py-16 md:py-24'>
//           {/* gradient backgound */}
//           <div className=' clip-path-slant absolute top-0 right-0 w-1/2 h-full bg-blue-700 hidden  md:block'></div>

//           <div className='relative flex flex-col lg:flex-row justify-between items-center lg:gap-12 gap-8 '>
//             <div className=' max-w-lg text-center md:text-left   '>

//               {/* left content */}
//               <h2 className='md:text-xl text-xl  font-semibold text-white lg:text-4xl sm:text-3xl  mb-5'>知己知彼，请联系我们：</h2>
//               <p className='text-blue-100 md:text-sm  text-sm sm:text-base '>最好的服务为你准备，最好的想法你来提议</p>

//             </div>
//             {/* right content */}
//             <div className='flex text-white/90   sm:flex-row sm:gap-0 text-left'>

//              <div className='md:text-xl text-sm flex-col w-full'>
//              <p>电话: <span> 17771931378 / 15571959852</span> 
             
//               </p> <br />
//               <p>邮箱: <span> 1516371630 / 2569815413 @qq.com</span> </p>
              

             
//              </div>
//             </div>
//           </div>


//         </div>

//       </div>


//       <style>
//         {
//           `.clip-path-slant {
//            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
//         }`
//         }
//       </style>
//     </motion.section>
//   )
// }

// export default NewsletterSection


import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeIn  } from '../utils/motion'

const NewsletterSection = () => {
  return (
    <motion.section
      id='new'
      variants={fadeIn('right', 0.4)}
      initial='hidden'
      whileInView='show'
      className='container mx-auto px-4 sm:px-6 lg:px-9 py-20 '
    >
      <div className='bg-blue-600 rounded-2xl overflow-hidden'>
        <div className='relative md:px-16 py-16 md:py-24'>
          {/* gradient backgound */}
          <div className='clip-path-slant absolute top-0 right-0 w-1/2 h-full bg-blue-700 hidden md:block'></div>

          <div className='relative flex flex-col lg:flex-row justify-between items-center lg:gap-12 gap-8 '>
            <div className='max-w-lg text-center md:text-left   '>
              {/* left content */}
              <h2 className='md:text-xl text-xl  font-semibold text-white lg:text-4xl sm:text-3xl  mb-5'>知己知彼，请联系我们：</h2>
              <p className='text-blue-100 md:text-sm  text-sm sm:text-base '>最好的服务为你准备，最好的想法你来提议</p>
            </div>
            {/* right content */}
            <div className='flex text-white/90   sm:flex-row sm:gap-0 text-left'>
              <div className='md:text-xl text-sm flex-col w-full'>
                <p>电话: <span> 17771931378 / 15571959852</span> </p>
                <br />
                <p>邮箱: <span> 1516371630 / 2569815413 @qq.com</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }

          @media (max-width: 768px) {
            .bg-blue-600 {
              background: linear-gradient(to right, #3f72af, #dbe2ef);
            }
          }
        `}
      </style>
    </motion.section>
  )
}

export default NewsletterSection    