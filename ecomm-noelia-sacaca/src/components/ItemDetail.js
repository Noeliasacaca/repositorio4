import {FiTag, CgShutterstock, FiShoppingBag} from "react-icons/fi";
import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
    return(
        <main>
            <div>
                <img src={item.img}/>
            </div>
            <div>
                <h2><strong>{item.title}</strong></h2>
                
                <div>
                    <FiTag/> <strong>${item.price}</strong>
                    <CgShutterstock/> <p>{item.description}</p>
                    <FiShoppingBag/> <strong>{item.stock}</strong>
                </div>
                <ItemCount 
                cantidad = {item.cantidad}
                stock="20" 
                initial = "1"
                onAdd={adding}/>
            </div>
        </main>
    )
}
export default ItemDetail;