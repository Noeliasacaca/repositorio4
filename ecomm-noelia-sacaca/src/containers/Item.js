import {FiTag} from "react-icons/fi";
import {Link} from 'react-router-dom';

const Item = ({title, price,img ,id})=>{
    return (
        <div>
            <div>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <Link to={"/detalle/{id}"}>
                <img src={img}/>
            </Link>
                <div>
                    <div>
                        <FiTag className="iconBooks"/> ${price} 
                    </div>
                    
                </div>

        </div>
        
    )
}
export default Item;