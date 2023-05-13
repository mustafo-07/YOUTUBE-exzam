import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Suspense fallback={<div>loading...</div>}> */}
    {/* <Header/> */}
    <App />
    {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>,
)
