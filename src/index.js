import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { default as DataProvider } from './context/use-data'
import { BrowserRouter } from 'react-router-dom';
import UserAuthProvider from './context/use-user-auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
