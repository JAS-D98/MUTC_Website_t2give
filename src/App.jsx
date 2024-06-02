import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Leadership from './Pages/Leadership/Leadership.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import TracksPage from "./Pages/TracksPage/TracksPage.jsx";
import Events from "./Pages/Events/Events.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/Leadership" element={<Leadership/>}/>
         <Route path="/tracks" element={<TracksPage/>}/>
         <Route path="/events" element={<Events/>}/>
      </Routes>
    </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
