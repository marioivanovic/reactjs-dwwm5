import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home.js';
import About from './components/about/About.js';
import Contact from './components/contact/Contact.js';
import Personnel from './Personnel.js';


import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/personnel">Personnel</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personnel" element={<Personnel />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
