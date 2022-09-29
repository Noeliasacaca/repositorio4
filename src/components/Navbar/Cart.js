
import { Link } from "react-router-dom";


const Cart = () => {



    return (
        <div>
            <h2>Carrito de compra</h2>
            <div>
                <button
                >
                    Vaciar del carrito
                </button>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <h2>
                    Monto total de la compra:
                </h2>
                <Link to="/Checkout">
                    {" "}
                    <button>Finalizar Compra</button>{" "}
                </Link>
            </div>
            <div>
                <h2>Aun  no has agregado productos a tu carrito</h2>
                <Link to="/">
                    {" "}
                    <button>volver a la tienda</button>{" "}
                </Link>
            </div>
        </div>
    );
};

export default Cart;