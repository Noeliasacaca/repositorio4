import {FiPlus, FiMinus} from "react-icons/fi";
import { useState } from "react";
import {Link} from 'react-router-dom';

const ItemCount = ({cantidad,initial, onAdd})=>{
    const [rate,setRate]= useState(parseInt(initial));
    const agregando2 = ()=> {
        if(rate<cantidad){
            rate<cantidad && setRate(rate +1);
        }
    }
    const agregando3 = ()=> {
        if(rate > 0 ){
            rate>initial && setRate(rate -1);
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
                <button type="button" onClick={()=>{onAdd(rate)}}>agregar al carrito</button>
            </div>
        </div>
    );

}

export default ItemCount