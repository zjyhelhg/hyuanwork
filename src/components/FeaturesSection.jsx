import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant} from '../utils/motion'

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "前端主流的任意一种框架",
      description: "Vue、React、Nuxt、Next、uniapp 等主流前端框架，助力实现快速开发，提升项目交付效率。"
    },
    {
      icon: "⚙️",
      title: "移动端设计",
      description: "Flutter、Figma、Tailwind CSS 等工具深度赋能，以灵活布局与组件化设计，高效打造优质响应式项目"
    },
    {
      icon: "🚀",
      title: "视频剪辑/图片处理 ",
      description: "剪映/快影/爱剪辑/必剪,Photoshop/Pixso,[移动端优先]"
    },
    {
      icon: "🐱",
      title: "协作与沟通",
      description: "能够清晰地表达设计理念，与产品经理、开发人员等团队成员进行有效沟通和协作。"
    },
    {
      icon: "🚁",
      title: "后端开发",
      description: "Express.js/Django/Spring,关系型数据库/NoSQL 数据库,MySQL、PostgreSQL结构化的数据模型和 SQL 查询语言。"
    },
    {
      icon: "🌱",
      title: "API 设计 (API Design)",
      description: "RESTful API/GraphQL,广泛采用的 API 设计风格，基于 HTTP 协议和资源的概念。"
    },
  ]
  return (
    <section className='max-w-7xl   mx-auto px-4 py-30' id='about'>
      {/* heading text */}
      <motion.div
      variants={textVariant( 0.4)}
      initial='hidden'
      whileInView='show'
      className='text-center mb-6'>
        <h2 className='text-3xl font-bold mb-4'>我们在找会这些(任意一种)的你</h2>
        <p className='text-gray-600'>根据项目需求和个人兴趣选择深入学习的领域</p>
      </motion.div>

      {/* features box */}
      {
        <motion.div
        variants={textVariant(0.6)}
        initial='hidden'
        whileInView='show'
        className='grid grid-cols-1 md:grid-cols-3  gap-8  '>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col justify-center items-center mt-6 '>
              <div className='w-24 h-24 rounded-full mb-6 flex  items-center justify-center' style={{
                backgroundColor: index === 0 ? '#F1EFFD' : index === 1 ? '#FEE7E7' : '#FFF3E4'
              }}>
                <div className='text-3xl'>{feature.icon}</div>
              </div>
              <h3 className='text-2xl font-medium mb-3' >{feature.title}</h3>
              <p className='text-gray-600 text-center  px-3'>{feature.description}</p>
            </div>
          ))}
        </motion.div>
      }


      {/* button */}

      <motion.div
       variants={textVariant( 0.4)}
       initial='hidden'
       whileInView='show'
      className='text-center mt-19'>
        <button className='relative   bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors px-8 py-3  cursor-pointer'>
          <a href="#new">Become a Dreamer</a>
          <div className='absolute rounded-full    -z-10 top-0 left-0 w-full h-full bg-blue-500/80 blur-xl  '></div>
        </button>
      </motion.div>


    </section>
  )
}

export default FeaturesSection