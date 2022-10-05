import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css'
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { FirebaseContextProvider } from './context/firebaseContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
