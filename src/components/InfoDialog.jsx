import { useState } from 'react';

export default function InfoDialog() {
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
        const response = await fetch('https://mx1o4u61v0.hzh.sealos.run/nodejs_sqlite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            age: parseInt(formData.age),
            tech_stack: formData.tech,
            phone_number: formData.tel,
            qq_email: formData.email,
          }),
        });

        const data = await response.json();
        if (data.error) {
          alert(data.error);
        } else {
          alert('提交成功!');
          console.log('提交的数据:', formData);
          // 重置表单
          setFormData({ name: '', age: '', tel: '', email: '', tech: '' });
          setIsOpen(false);
        }
      } catch (error) {
        console.error('提交数据时出错:', error);
        alert('提交数据时发生错误，请稍后重试');
      }
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={toggleDialog}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        打开收集表单
      </button>

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
  );
}