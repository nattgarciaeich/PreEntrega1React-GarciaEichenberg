import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Detalle from './pages/Detalle'

function App() {
  
  return (
      <div className="fondo">  
        <NavBar/>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/category/:category' element={<Inicio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/item/:id' element={<Detalle />} />
        </Routes>
        
    </div>
  )
}

export default App

