import {FiTag} from "react-icons/fi";
import {CgShutterstock} from "react-icons/cg";
import {Link} from 'react-router-dom';

const Item = ({id,title, price,img})=>{
    let detalles = `/detail/${id}`
    return (
        <div className="m-5">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <Link>
                    <img  src={img} />
                </Link>
                <div>
                    <div>
                        <Link to={detalles} >
                        <button type="button"><CgShutterstock/> Ver detalles </button>
                        </Link>
                    </div>
                    <div>
                        <FiTag/>${price}
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default Item;