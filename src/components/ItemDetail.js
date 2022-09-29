import { FiTag } from "react-icons/fi";
import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";



const ItemDetail = ({ item }) => {
    const [Count] = useState(0);
    const carrito = (card) => {
        alert(`${card}productos estan en tu carrito`)
    }

    return (
        <main>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded "  src={item.img}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-muted"><FiTag />${item.price}</small></p>
                            <p className="card-text"><small className="text-muted">stock:{item.stock}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            {
                Count === 0 ?
                    <ItemCount
                        stock={item.stock}
                        initial="0"
                        onAdd={carrito}
                    /> :
                    <div>
                        <Link to="/">
                            <button>Seguir comprando</button>
                        </Link>
                        <Link to="/Cart">
                            <button>Terminar compra</button>
                        </Link>
                    </div>
            }
        </main >
    )
}
export default ItemDetail;

