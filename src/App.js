import { Route, Routes } from "react-router-dom";
import "./App.css";
import BT4 from "./Bt4/bt4";
import Login from "./Bt4/Pages/login";
import About from "./Bt4/Pages/about";
import Product from "./Bt4/Pages/Product";
import BT5 from "./Bt5/bt5";
import Home from "./Bt4/Pages/home";
import BT2 from "./BT2/bt2";
import Cart from "./Bt5/components/cart";


function App() {
  return (
    <Routes>
      <Route path="/bt2" element={<BT2/>} />
      <Route path="/bt4" element={<BT4 />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="/bt5" element={<BT5 />} />
      <Route path="/bt5/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
