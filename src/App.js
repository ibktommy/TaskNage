import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import ErrorModal from './components/ErrorModal'
import { useGlobalAppContext } from './context/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  // Get Error-State from the App Context
  const { error } = useGlobalAppContext()

  return (
    <>
      {!error && <ErrorModal />}
      <div className='container'>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
