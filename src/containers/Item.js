import {FiTag} from "react-icons/fi";
import {CgShutterstock} from "react-icons/cg";
import {Link} from 'react-router-dom';

const Item = ({title, price,img ,id, stock})=>{
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <Link>
            <img src={img}/>
            </Link>
            <p>En stock {stock}</p>               
            <Link to={`/detail/${id}`}>
                <buttom className='btn'><CgShutterstock/> Ver detalles </buttom>
                </Link>
            
                <div>
                    <div>
                        <FiTag/> ${price} 
                    </div>
                    
                </div>

        </div>
        
    )
}
export default Item;