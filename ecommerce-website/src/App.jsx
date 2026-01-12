import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { Routes, Route } from "react-router"
import { CheckOut } from './pages/CheckOut.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}> </Route>
      <Route path="/checkout" element={<CheckOut />}> </Route>
    </Routes>



  )
}

export default App
