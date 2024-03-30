import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
