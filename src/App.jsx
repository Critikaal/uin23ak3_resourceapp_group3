import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'

import './styles/main.scss'

function App() {
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
