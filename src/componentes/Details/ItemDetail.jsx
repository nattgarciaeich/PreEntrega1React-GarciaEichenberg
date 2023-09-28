import React from 'react'
import "./itemDetail.css"
import Counter from '../Counter/Counter'

const ItemDetail = ( {item} ) => {
  return (
    <div className="contenedor-detail">
      <h5> {item.title} </h5>
      <div className="details">
        <img className="img-detail" src={item.image} alt={item.title} />
        <div className="detail-info">
          <p className="desc-detail">Descripción: {item.description}</p>
          <p className="precio-detail">Precio: ${item.price}</p>
          <p className="cat-detail">Categoría: {item.category}</p>
          <div className="counter"><Counter/></div>
        </div>        
      </div>
    </div>

  )
}

export default ItemDetail