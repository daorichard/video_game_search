import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game/:id' element={<Home />}></Route>
      </Routes>
      <h1>Welcome Richard!</h1>
      <h1>sup bro</h1>
      <div>hhey man</div>
    </div>
  );
}

export default App;
