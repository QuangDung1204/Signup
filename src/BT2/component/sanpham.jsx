import React from 'react'

function Sanpham({item}) {
  return (
    <div className='w-[220px] h-[450px]  text-white m-auto justify-center items-center border	border-red'>
      <img src={item.imgURL} alt="" />
      <p className='pl-2 text-black cursor-pointer'>{item.name}</p>
      <p className='pl-2 pt-6 text-red-700 cursor-pointer'>{item.price}</p>
      <p className='pl-2 py-2.5 text-xs	text-[#5b5b5b] cursor-pointer'>Smember giảm thêm đến 138.000đ</p>
      <p className='pl-2	text-xs	text-[#5b5b5b] cursor-pointer'>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng</p>
    </div>
  )
}

export default Sanpham
