import React from 'react'
import Col from 'react-bootstrap/Col';
import CardItem from '../CardItem/CardItem';


const ItemList = ({items}) => {
    return (
        <>
        {
            items.map( (item) => (
                <Col md={4} lg={3} xs={12} key={item.id}>
                    <CardItem item={item}/>
                </Col>
            ))
        }
        </>
    )
}

export default ItemList