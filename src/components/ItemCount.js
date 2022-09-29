import React from "react";
import { useState, useEffect } from "react";


const ItemCount = ({ initial, stock, item }) => {
    const [cantidad, setCantidad, addItem] = useState(initial);



    useEffect(() => {
        setCantidad(initial);
    }, [initial]);

    const addProducto = (num) => {
        setCantidad(cantidad + num);
    };

    const onAddHandle = () => {
        addItem(item, cantidad);
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => addProducto(-1)}
                    disabled={cantidad === initial ? true : null}
                >
                    -
                </button>
                <span>{cantidad}</span>
                <button
                
                    onClick={() => addProducto(+1)}
                    disabled={cantidad === stock ? true : null}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => onAddHandle()}
                disabled={stock === 0 ? true : null}
            >
                Añadir al Carrido
            </button>
        </div>
    );
};

export default ItemCount;