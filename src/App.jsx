import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemList/ItemListContainer'

function App() {
  
  return (
      <div className="fondo">  
        <NavBar/>
        <ItemListContainer greeting = "Bienvenidos"/>
    </div>
  )
}

export default App

