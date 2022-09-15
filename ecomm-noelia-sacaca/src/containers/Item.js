import {FiTag} from "react-icons/fi";

const Item = ({title, price,img})=>{
    return (
        <div>
            <div>
                <a >
                    <img src={img}/>
                </a>
                <div>
                    <div>
                        <FiTag className="iconBooks"/> ${price} 
                    </div>
                    
                </div>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
        
    )
}
export default Item;