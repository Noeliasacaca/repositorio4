import {FiPlus, FiMinus} from "react-icons/fi";
import { useState } from "react";
import {Link} from 'react-router-dom';

const ItemCount = ({cantidad,inicial, onAdd})=>{
    const [rate,setRate]= useState(parseInt(inicial));
    const agregando2 = ()=> {
        if(rate<cantidad){
            rate<cantidad && setRate(rate +1);
        }
    }
    const agregando3 = ()=> {
        if(rate > 0 ){
            rate>inicial && setRate(rate -1);
        }
    }
    return(
        <div>
            <div className="Buttons">
                <Link  onClick={()=>{agregando3()}}><FiMinus/></Link>
                <span>{rate}</span>
                <Link onClick={()=>{agregando2()}}><FiPlus/></Link>
            </div>
            <div >
                <button type="button" disabled={rate==0 && true}  onClick={()=>{onAdd(rate)}}>agregar al carrito</button>
            </div>
        </div>
    );

}

export default ItemCount