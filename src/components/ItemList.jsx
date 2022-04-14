import React from 'react'
import Item from './Item'
import {motion} from 'framer-motion'

export default function ItemList ({productos}) {
   
    return (
        <>
        <motion.div className="grid-container"
        initial={{scale:1 , opacity:0}}
        animate={{opacity: 1}}
        transition={{duration: 1 , ease: 'easeInOut'}}
        transform={{rotate: 'translateX(360)'}}>
            {productos.map(producto => <Item key={producto.id} {...producto}></Item>)}
        </motion.div>
        </>
    )
}