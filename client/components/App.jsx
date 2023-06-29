import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/About';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
