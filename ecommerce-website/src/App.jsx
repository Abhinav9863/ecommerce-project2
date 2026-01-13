import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { Routes, Route } from "react-router"
import { CheckOut } from './pages/CheckOut.jsx'
import  { Orders } from './pages/Orders.jsx'
import { Tracking } from './pages/Tracking.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
      const [cart , setCart] = useState([]);
      useEffect(() => {
          axios.get('http://localhost:3000/api/cart-items')
            .then((response) => {
                setCart(response.data)
            });
      },[]) 
            


  return (
    <Routes>
      <Route path="/" element={<HomePage cart = {cart}/>}> </Route>
      <Route path="/checkout" element={<CheckOut cart = {cart}/>}> </Route>
      <Route path = "/orders" element = {<Orders />}> </Route>
      <Route path = "/tracking" element = {<Tracking />}> </Route>
    </Routes>



  )
}

export default App
