import React from 'react'
import "./cardItem.css"
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardItem = ({item}) => {
    return (
        <Card className="cuerpo-card">
          <Card.Img className="card-img" variant="top" src={item.image} />
           <Card.Body>
            <Card.Title className="card-title">{item.title}</Card.Title>
            <Card.Text className="card-txt">
              {"$" + item.price}
            </Card.Text>
            <Link to={`/item/${item.id}`}>
            <Button className="card-btn">Ver detalles</Button>
            </Link>
          </Card.Body>
        </Card>
    );    
}

export default CardItem