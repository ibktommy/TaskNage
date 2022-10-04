import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { FirebaseContextProvider } from './context/firebaseContext';
import { BrowserRouter as Router } from 'react-router-dom';

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
