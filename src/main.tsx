import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import './index.css'
import '../app/globals.css';


WebApp.expand()
window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
window.scrollTo(0, 100);
WebApp.ready()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
