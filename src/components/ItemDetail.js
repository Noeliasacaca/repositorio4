import { FiTag } from "react-icons/fi";
import ItemCount from "./ItemCount";

const carrito = (card)=>{
    alert(`${card}productos estan en tu carrito`)
}

const ItemDetail = ({item})=>{
    return(
        <main>
            <div>
                <img src={item.img}/>
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div >
                    <FiTag/>${item.price}
                </div>
                <ItemCount 
                stock = {item.stock}
                initial = "1"
                onAdd = {carrito}
                />
            </div>
        </main>
    )
}
export default ItemDetail;