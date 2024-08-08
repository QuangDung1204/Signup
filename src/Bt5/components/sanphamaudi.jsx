import React from 'react'

function Audiproduct({ item, addCart }) {
  return (
    
    <div>
      <div className='w-[250px] h-[270px]  text-white m-auto justify-center items-center border rounded-md'>
        <img className='cursor-pointer h-32' src={item.imgURL} alt="" />
        <div className="text-center pl-3 mt-4 text-lg text-gray-900">
          <p>{item.name}</p>
        </div>
        <div className="pl-3 mt-1 text-sm font-medium text-gray-900">
          <p>{item.price}</p>
        </div> 
        <div className="mt-4 h-8 mx-6 justify-center text-center text-while bg-red-700	 cursor-pointer border rounded-lg">
          <button onClick={addCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default Audiproduct
