import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { Routes, Route } from "react-router"
import { CheckOut } from './pages/CheckOut.jsx'
import  { Orders } from './pages/Orders.jsx'
import { Tracking } from './pages/Tracking.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}> </Route>
      <Route path="/checkout" element={<CheckOut />}> </Route>
      <Route path = "/orders" element = {<Orders />}> </Route>
      <Route path = "/tracking" element = {<Tracking />}> </Route>
    </Routes>



  )
}

export default App
