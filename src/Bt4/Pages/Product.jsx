import React, { useEffect, useState } from 'react'
import Audiproduct from '../components/sanphamaudi'
import axios from "axios";

function Product() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://cellphone-s-json-server.onrender.com/api/productList').then(res => setList(res.data))
  },[])
  return (
    <div>
      <div className="flex justify-center mt-10  ">
          <div className="grid grid-cols-4 gap-20">
            {list.map((item,index) => (
              <Audiproduct key={index} item={item}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Product
