import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleDecrement = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }
    const stockdispo = stock - count
    return (
        <div>
            <h2>{count}</h2>
            <button variant="outline-dark" onClick={handleAdd}>+</button>
            <button variant="outline-dark" onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button variant="outline-dark" onClick={handleDecrement}>-</button>
            <h3>Stock Disponible {stockdispo}</h3>
        </div>
    )
}

export default ItemCount;