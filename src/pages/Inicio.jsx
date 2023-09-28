import React from 'react'
import ItemListContainer from '../componentes/Items/ItemList/ItemListContainer'
import Container from 'react-bootstrap/Container';

const Inicio = () => {
  return (
    <>
    <Container>
        <h1>Nuestros productos: </h1> 
    </Container>
    <ItemListContainer />
    </>
  )
}

export default Inicio