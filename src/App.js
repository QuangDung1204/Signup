import { Route, Routes } from "react-router-dom"
import "./App.css"
import BT4 from "./Bt4/bt4"
import Login from "./Bt4/Pages/login"
import About from "./Bt4/Pages/about"
import Product from "./Bt4/Pages/Product"
import Infor from "./Bt4/components/infor"
import Home from "./Bt4/Pages/home"


function App() {
  return (
    <Routes>
      <Route path="/bt4" element={<BT4/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="infor" element={<Infor/>}/>
        <Route path="product" element={<Product/>}/>
      </Route>
    </Routes>
  )
}

export default App
