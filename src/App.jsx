import React from 'react';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Login from './component/login';
import Signup from './component/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
