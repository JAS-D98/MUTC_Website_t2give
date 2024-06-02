import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Leadership from './Pages/Leadership/Leadership.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/Leadership" element={<Leadership/>}/>
      </Routes>
    </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
