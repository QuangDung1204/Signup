import React from 'react'
import { Outlet } from 'react-router-dom'
import Hearder from './components/Header'

function BT4() {
  return (
    <div>
      <Hearder />
        
      <Outlet />
    </div>
  )
}
export default BT4
