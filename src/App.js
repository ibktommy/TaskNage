import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
