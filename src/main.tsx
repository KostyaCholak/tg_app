import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import './index.css'
import '../app/globals.css';
import { ThemeProvider } from './components/theme-provider.tsx'


WebApp.expand();
const overflow = 0;
document.body.style.overflowY = 'hidden'
document.body.style.marginTop = `${overflow}px`
// document.body.style.height = window.innerHeight + overflow + "px"
document.body.style.paddingBottom = `${overflow}px`
window.scrollTo(0, overflow);
WebApp.ready();
console.log(window.innerHeight);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
