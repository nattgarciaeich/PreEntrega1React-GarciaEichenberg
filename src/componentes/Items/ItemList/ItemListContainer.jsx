import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemList from './ItemList';
import useFetch from '../../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products")
    const {category} = useParams();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (items) {
            if (category) {
                const filtered = items.filter(item => item.category === category);
                setFilteredItems(filtered);
            }else {
            setFilteredItems(items);
            }
        }
    }, [items, category]);

    return (
        <Container>
            <Row>
                {
                filteredItems && filteredItems.length > 0 && 
                <ItemList items={filteredItems} />
                }
            </Row>
        </Container>
    );
}

export default ItemListContainer;

