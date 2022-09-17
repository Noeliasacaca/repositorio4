import {FiPlus, FiMinus} from "react-icons/fi";
import { useState } from "react";

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
                <a href="#" onClick={()=>{agregando3()}}><FiMinus/></a>
                <span>{rate}</span>
                <a href="#" onClick={()=>{agregando2()}}><FiPlus/></a>
            </div>
            <div >
                <button type="button" onClick={()=>{onAdd(rate)}}>agregar al carrito</button>
            </div>
        </div>
    );

}

export default ItemCount