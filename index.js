import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Login.scss';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
