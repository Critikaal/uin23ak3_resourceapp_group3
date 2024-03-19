import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path=':slug' element={<Resources/>}></Route>
        </Routes>        
      
    </BrowserRouter>
  )
}

export default App
