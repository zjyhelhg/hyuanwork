import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Weixin from '../assets/weixin.png'

const Footer = () => {
  // footer section
  const footerLinks = {
    front_end: [
      { name: 'React', href: 'https://react.dev/' },
      { name: 'Vue.js', href: 'https://vuejs.org/' },
      { name: 'Next.js', href: 'https://nextjs.org/docs/routing/introduction' },
      { name: 'Nuxt.js', href: 'https://nuxt.com/docs/guide/directory-structure/pages' },
      { name: 'Vite', href: 'https://vitejs.dev/' },
    ],
    back_end: [
      { name: 'Express.js', href: 'https://www.expressjs.com.cn/' },
      { name: 'Node.js', href: 'https://nodejs.cn/#google_vignette' },
      { name: 'Python（Django）', href: 'https://docs.djangoproject.com/ ' },
      { name: 'Python（Flask）', href: 'https://flask.palletsprojects.com/en/2.3.x/ ' },
      { name: 'Java（Spring Boot）', href: 'https://spring.io/projects/spring-boot#learn' },
    ],
    SQL: [
      { name: 'MySQL', href: 'https://dev.mysql.com/doc/' },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/docs/' },
      { name: 'MongoDB', href: 'https://www.mongodb.com/docs/' },
      { name: 'Redis', href: 'https://redis.io/docs/' },
      { name: 'Supabase', href: 'https://supabase.com/' },
    ],
    componnet: [
      { name: 'Ant Design', href: 'https://ant.design/index-cn' },
      { name: 'Element Plus', href: 'https://element-plus.org/zh-cn/' },
      { name: 'Vuetify ', href: 'https://vuetifyjs.com/zh-Hans/' },
      { name: 'shadcn-vue', href: 'https://www.shadcn-vue.com/' },
      { name: 'daisyui', href: 'https://www.shadcn-vue.com/' },
    ],

  }
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='container mx-auto px-4 sm:px-6 md:px-18 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* brand column  */}
          <div className=' col-span-12 lg:col-span-4 '>
            {/* logo */}
            <div className='flex items-center gap-1 mb-3 '>
              <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 rounded-full bg-blue-600 ml-5 opacity-70 hover:opacity-100 transition-opacity'></div>
                <div className='w-4 h-4 rounded-full bg-red-600 -ml-2 opacity-70 hover:opacity-100  transition-opacity  '></div>
              </div>
              <span className='text-xl  font-semibold ml-1  '>The Next Design</span>
            </div>


            <p className='text-gray-200  mb-6  px-4'>
              <span className='text-gray-400'>想要深入了解更多开发相关知识，拓展技术视野？那就快来加入我们的微信（WeChat）群聊吧！在这里，与各路技术高手交流探讨，解锁更多干货。</span>
            </p>
            <div className='ml-5'>

              <img className='object-contain h-40 w-40 mx-20' src={Weixin} alt="" />
            </div>


            <div className='flex gap-4 px-4 mx-20'>
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
          <div className='md:col-span-8 col-span-11'>
            <div className='grid grid-cols-2  md:grid-cols-4 gap-10'>
              {
                Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <div key={category}>
                    <h3 className='text-lg font-semibold mb-4 uppercase'>{category}</h3>
                    <ul className='space-y-2'>
                      {links.map((link, index) => (
                        <li className=''>
                          <a href={link.href} target="_blank" className='text-gray-200 hover:text-gray-400'>{link.name}</a>
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
            <p className='text-gray-600 text-sm'>  {new Date().getFullYear()}-{new Date().getMonth() + 1}-{new Date().getDate()}</p>
            <p className='text-gray-600 text-sm'>Created by ZhangJinyuan - Qian hao - WangYuHang</p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer