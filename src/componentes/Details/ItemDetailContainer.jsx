import React from 'react'
import ItemDetail from './itemDetail'
import useFetch from '../../Hooks/useFetch'

const ItemDetailContainer = ( {id} ) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)

    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} />

            }           
        </>
    )
}

export default ItemDetailContainer