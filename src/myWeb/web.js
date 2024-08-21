import React from 'react'
import HeaderWeb from './components/header'
import Tashbar from './Tashbar/tashbar'
import { Outlet } from 'react-router-dom'
import Body from './components/body'
import LazyComponents from './components/lazycomponent'
import Bodys from './components/bodys'

function Web() {
  return (
    <div>
      <Tashbar/>
      <HeaderWeb/>
      <Body/>
      <Bodys/>
      <LazyComponents/>
      <Outlet/>
    </div>
  )
}

export default Web
