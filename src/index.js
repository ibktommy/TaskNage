import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { FirebaseContextProvider } from './context/firebaseContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
