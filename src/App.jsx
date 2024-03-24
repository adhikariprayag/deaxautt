import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//IMPORTING COMPONENTS
import Navbar from './components/Navbar'
import Gtt from './components/Gtt'

//IMPORTING PAGES
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>

        <Gtt />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App