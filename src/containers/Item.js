import {FiTag} from "react-icons/fi";
import {CgShutterstock} from "react-icons/cg";
import {Link} from 'react-router-dom';

const Item = ({id,title, price,img})=>{
    let detalles = `/detail/${id}`
    return (
        <div>
        <div className="container col-lg-4 producto" >
                <div className="product card img-fluid ">
                    <div className="img"> 
                        <Link>
                            <img  src={img} className="card-img-top "/>
                        </Link>
                    </div>
                    <div className="card-body">
                            <div className="card-title">
                                <h3>{title}</h3>
                            </div>
                            <div className="card-title">
                                <FiTag/>${price}
                            </div>
                            <div>
                                <Link to={detalles} >
                                <button  className="btn boton btn-rounded" type="button"><CgShutterstock/> Ver detalles </button>
                                </Link>
                            </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Item;
