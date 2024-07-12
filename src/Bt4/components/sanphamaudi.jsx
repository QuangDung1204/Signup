import React from 'react'

function Audiproduct({item}) {
  return (
    <div>
      <div className='w-[250px] h-[250px]  text-white m-auto justify-center items-center border	border-red'>
      <img className='cursor-pointer'src={item.imgURL} alt="https://www.audi.vn/sea/web/vnvi/models/e-tron-gt/audi-e-tron-gt.html" />
      <p className='pl-2 text-black cursor-pointer'>{item.name}</p>
      <p className='pl-2 pt-2 text-black cursor-pointer'>{item.price}</p>
      <p className='pt-8 text-center text-black cursor-pointer bg-transparent border-black'>Khám phá ngay</p>
    </div>
    </div>
  )
}

export default Audiproduct
