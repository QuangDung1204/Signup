import React from 'react'

function About() {
  return (
    <div>
      <img src='https://www.audi.vn/content/dam/nemo/sea/vn/tools/forms/1920x600-general-contact-form.jpg?width=1440' alt='' className='w-full h-[450px]' />
      <p className='mt-4'>Audi Việt Nam - Forms</p>

      <div className="max-w-lg mx-auto  bg-white  rounded-lg px-8 py-10 flex flex-col ">
        <h1 className="text-4xl font-bold text-left text-black mb-8">Liên hệ Audi</h1>
        <h1 className="text-xl font-bold text-left text-black mb-8">Thông tin liên lạc</h1>
        <form action="#" className="w-full flex flex-col gap-4">
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="firstName" className="text-sm text-black mr-2">Họ và Tên</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="lastName" className="text-sm text-black mr-2">Email</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="username" className="text-sm text-black mr-2">Điện thoại</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-black mr-2">Địa chỉ liên hệ</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="password" className="text-sm text-black mr-2">Nam/Nữ</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-center">
            <input id="link-radio" type="radio" defaultValue className="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="link-radio" className="ms-2 text-sm font-medium text-black">Tôi đồng ý cho phép Công Ty TNHH Ô tô Châu Á (Audi Việt NAm) có thể sử dụng dữ liệu cá nhân của tôi cho mục đích gửi đến thông điệp vê về sản phẩm, dịch vụ, chăm sóc khách hàng, chương trình khuyến mại và các hoạt động khác liên quan đến hoạt động kinh doanh của Audi Việt Nam</label>
          </div>

          <button type="submit" className="bg-black text-white font-medium py-2 px-4 rounded-md shadow-sm">Gửi</button>
        </form>

      </div>

    </div>
  )
}

export default About
