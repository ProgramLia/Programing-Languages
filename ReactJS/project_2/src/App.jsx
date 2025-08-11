import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NotFound from "./notfound";

export default function App() {
  return (
    <div >
      <nav className="navbar">
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}