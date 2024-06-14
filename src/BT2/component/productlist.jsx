import React from 'react'
import Sanpham from './sanpham'

function ProductList() {
  const productList = [
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
      name : 'iPhone 13 128GB Chính hãng VN/A',
      price : "13.790.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png',
      name : 'Samsung Galaxy S24 Ultra 12GB 256GB',
      price : "28.990.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
      name : 'iPhone 15 Pro Max 256GB Chính hãng VN/A',
      price : "29.490.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23_1.png',
      name : 'Samsung Galaxy S23 8GB 128GB - Chỉ có tại CellphoneS ',
      price : "13.790.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      name : 'iPhone 15 128GB Chính hãng VN/A',
      price : "19.490.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13-pro-plus_9_.png',
      name : 'Xiaomi Redmi Note 13 Pro Plus 5G 8GB 256GB',
      price : "9.290.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/3/c3845789-dda7-44d7-a9eb-bb8e775c9ffb.png',
      name : 'Samsung Galaxy M34 5G 8GB 128GB',
      price : "5.590.000đ",
    },
    {
      imgURL : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-reno-11-f-2.png',
      name : 'OPPO Reno11 F 5G 8GB 256GB',
      price : "8.090.000đ",
    },
  ]
  return (
    <div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-4 gap-20">
            {productList.map((item,index) => (
              <Sanpham key={index} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
