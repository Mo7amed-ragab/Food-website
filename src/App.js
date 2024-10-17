import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Menu from './Components/Menu';
import Book from './Components/Book';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pages" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
