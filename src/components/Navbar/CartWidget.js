import React from 'react'
import { FiShoppingCart} from "react-icons/fi";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Shop } from './CartContext';

const CartWidget = () => {
    const navigate = useNavigate()

    const redireccion = () => {
        navigate('/cart')
    }

    const { cart } = useContext(Shop)

    return (
        <>
        <div className='carrito'>
            {cart.length ? (
                <>
                    <p>{cart.length}</p>
                    <FiShoppingCart onClick={redireccion} />
                </>
            ) : (
                ''
            )}
        </div>
        </>
    )
}

export default CartWidget