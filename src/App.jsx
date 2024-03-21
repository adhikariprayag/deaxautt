import React from 'react'
import Button from './components/Button'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button cta="Load More" style="sky" link='/' />
      </BrowserRouter>
    </>
  )
}

export default App