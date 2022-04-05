import React from 'react'
import Item from './Item'

export default function ItemList ({productos}) {
   
    return (
        <>
        <div className="grilla">
            {productos.map(producto => <Item key={producto.id} {...producto}></Item>)}
            
        </div>
        </>
    )
}