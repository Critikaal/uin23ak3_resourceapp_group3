import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Content from './components/Content'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path=':slug' element={<Content/>}></Route>
        </Routes>        
      
    </BrowserRouter>
  )
}

export default App
