import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
