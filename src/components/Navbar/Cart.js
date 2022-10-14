import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Shop } from '../Navbar/CartContext'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";

const CartItem = () => {
    const { cart, removeItem, total } = useContext(Shop);

    const nav = useNavigate();
    const redireccion = () => {
        nav(`/`);
    };

    const [loading, setLoading] = useState(false);

    const handleBuy = async () => {
        setLoading(true)
        const precioTotal = total();
        const orden = ordenGenerada("Maria", "m4ria@gmail.com", 123456789, cart, precioTotal);

        const docRef = await addDoc(collection(db, "orders"), orden);

        cart.forEach(async (productsCart) => {
            const productRef = doc(db, "products", productsCart.id);
            const productSnap = await getDoc(productRef);
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productsCart.quantity,
            });
        });
        setLoading(false);
        alert(
            `Gracias por su compra! Número de orden: ${docRef.id}`
        );
    };

    return (
        cart.length ?
            <div className="contenedorCart">
                <table>
                    <thead>
                        <tr className='fila'>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        cart.map((item) => {
                            const handleRemove = () => {
                                removeItem(item.id)
                            }
                            return (
                                <tbody key={item.id}>
                                    <tr className="filaItem">
                                        <td>{item.quantity}</td>
                                        <td> {item.title} <img src={item.img} alt={item.title} /> </td>
                                        <td>$ {item.price}</td>
                                        <td>$ {(item.quantity * item.price).toFixed(2)}</td>
                                        <td>
                                            <button className='tacho' onClick={handleRemove}><FaTrash /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
                <aside className='resumen'>
                    <h4>Total: {total()}$</h4>
                    <button className='btnConfirm' variant="outline-dark" onClick={handleBuy}>Confirmar compra</button>
                </aside>
            </div>
            :
            <div>
                <h1>El carrito de compras está vacío.</h1>
                <button className='btnVolver' variant="outline-dark" onClick={redireccion}>Volver Al Inicio</button>
            </div>
    );
}

export default CartItem