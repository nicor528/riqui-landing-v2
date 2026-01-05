import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import "bootstrap/scss/bootstrap.scss";
import "assets/css/paper-kit.css";
import "assets/demo/demo.css?v=1.3.0";
//import "assets/css/nucleo-icons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
