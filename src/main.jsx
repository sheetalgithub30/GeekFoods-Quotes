import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'

// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
)
