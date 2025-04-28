import React from 'react'
import { useState } from 'react'
import heroImage from '../assets/hero-image.png'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    tel: '',
    email: '',
    tech: '',
  });
  const [errors, setErrors] = useState({});

  const toggleDialog = () => {
    setIsOpen(!isOpen);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "姓名不能为空";
    }


    if (!/^\d+$/.test(formData.age) || formData.age < 0 || formData.age > 120) {
      newErrors.age = "请输入正确的年龄（0-120）";
    }
    if (!/^1[3-9]\d{9}$/.test(formData.tel)) {
      newErrors.tel = "请输入正确的手机号";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "请输入正确的邮箱";
    }
    if (formData.tech.length > 200) {
      newErrors.tech = "技术栈描述不能超过200字";
    }

    return newErrors;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // ✅ 这里发请求给你的云函数
        const response = await fetch('https://mx1o4u61v0.hzh.sealos.run/nodejs_sqlite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            age: formData.age,
            tech_stack: formData.tech,
            phone_number: formData.tel,
            qq_email: formData.email,
          })
        });

        const result = await response.json();

        if (result.error) {
          alert(`提交失败: ${result.error}`);
        } else {
          alert('提交成功!');
          console.log('提交成功返回的数据:', result);
          // 重置表单
          setFormData({ name: '', age: '', tel: '', email: '', tech: '' });
          setIsOpen(false);
        }

      } catch (error) {
        console.error('提交出错:', error);
        alert('提交失败，请稍后重试');
      }
    }
  };
  return (
    <section id='home' className=' justify-between container flex flex-col md:flex-row  mx-auto pt-44 pb-6 lg:px-8 sm:px-6'>
      {/* left side */}
      <div className=' pl-10 space-y-10  md:w-1/2 w-full'>
        {/* star icon */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView="show"

        >
          <div className='group-hover:scale-110 flex items-center gap-2 w-fit px-4 py-2 bg-gray-100 rounded-4xl cursor-pointer hover:bg-gray-200  transition-all'>
            <span className='hover:scale-120'>⭐</span>
            <span className='text-sm font-medium'>Jump start your growth</span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial='hidden'
          whileInView="show"

          className='text-4xl mt-10 font-bold md:text-5xl lg:text-5xl leading-tight'>欢迎来到
          <span className='text-blue-500 inline-block relative'> 昊元工作室
            <span className='absolute w-full bottom-0 h-0.5 left-0 bg-gray-200/80'></span>
          </span><span className='mt-2 animate-pulse'>⏰</span><br />
          <span className='text-3xl'>Welcome to Haoyuan Studio</span>
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          className='max-w-xl md:text-xl text-gray-600'>正在寻找渴望成长、热爱技术的你！在这里，你将有机会参与有趣的项目，与优秀的团队并肩作战，共同打造令人骄傲的产品。

        </motion.p>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          className='max-w-xl md:text-xl text-gray-600'>和我们合作⬇️

        </motion.p>

        {/* form  for the  Clients */}
        <div className="  flex     md:items-center   justify-start  ">
          <motion.button
             variants={fadeIn('right', 0.2)}
             initial='hidden'
             whileInView='show'
            onClick={toggleDialog}
            className="md:px-6 md:py-3 px-4 py-1   bg-blue-600 text-white  cursor-pointer rounded-lg hover:bg-blue-700 transition-all"
          >
            Click Me
          </motion.button>

          {isOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
                <h2 className="text-2xl font-bold mb-6 text-center">填写您的信息</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block mb-1 font-medium">姓名：</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block mb-1 font-medium">年龄：</label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>

                  {/* Tel */}
                  <div>
                    <label className="block mb-1 font-medium">电话：</label>
                    <input
                      type="text"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.tel && <p className="text-red-500 text-sm mt-1">{errors.tel}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1 font-medium">邮箱：</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Tech */}
                  <div>
                    <label className="block mb-1 font-medium">技术栈：</label>
                    <textarea
                      name="tech"
                      value={formData.tech}
                      onChange={handleChange}
                      placeholder="请输入您熟悉的技术栈..."
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                      rows="3"
                    />
                    {errors.tech && <p className="text-red-500 text-sm mt-1">{errors.tech}</p>}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-6">
                    <button
                      type="button"
                      onClick={toggleDialog}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                    >
                      提交
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>


      </div>


      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView='show'
        className=' md:w-1/2   w-full   md:-mt-10  mt-20  pl-0  md:pl-12 '>
        <div className='relative'>
          <img src={heroImage} alt="hero Image" className='rounded-lg relative z-10 hover:scale-105  transition-all' />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero