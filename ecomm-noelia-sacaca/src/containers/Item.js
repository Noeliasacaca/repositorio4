import {FiTag} from "react-icons/fi";
import {CgShutterstock} from "react-icons/cg";
import {Link} from 'react-router-dom';

const Item = ({title, price,img ,id})=>{
    let link = `/detalle/${id}`
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <a>
                <img src={img}/>
            </a>
            <Link to={link}>
            <CgShutterstock/> description
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