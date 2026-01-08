import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NoPage from './pages/NoPage.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App