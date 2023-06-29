import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/About';
import Searchbar from './Searchbar';
function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
