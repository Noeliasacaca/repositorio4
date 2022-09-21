import {FiTag, FiShoppingBag} from "react-icons/fi";
import {CgShutterstock} from "react-icons/cg";
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
                {
                    Count === 0 ?
                    <ItemCount 
                        stock = {item.stock}
                        initial = "0"
                        onAdd = {Handler}
                    />:
                    <Link to='/cart'>
                        <button type="button" className="btn py-0 " >Checkout</button>
                    </Link>
                }
            </div>
        </main>
    )
}
export default ItemDetail;