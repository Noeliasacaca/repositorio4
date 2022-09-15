import { useEffect, useState } from 'react';
import ItemCount from '../components/ItemCount';
import customFetch from '../utils/Data';
import ItemList from '../containers/ItemList'

const adding = (rate)=>{
    if(rate > 0 ){
        alert(` ${rate} productos se agregaron a tu carrito `)
    }
}
const ItemListContainer= ()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        customFetch()
        .then(result=> setData(result))
        .catch(err=> console.log(err))
    }, [])
    return(
        <main>
            <div><h2>Nuestros productos</h2></div>
            <ItemList 
                items={data} />
            <ItemCount 
                stock="20" 
                initial ="1" 
                onAdd={adding}/>
        </main>
    )
}
export default ItemListContainer;;