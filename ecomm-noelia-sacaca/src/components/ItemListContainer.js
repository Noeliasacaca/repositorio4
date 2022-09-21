import { useEffect, useState } from 'react';
import ItemCount from '../components/ItemCount';
import Data from '../utils/Data';
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom';

const adding = (rate)=>{
    if(rate > 0 ){
        alert(` ${rate} productos se agregaron a tu carrito `)
    }
}
const ItemListContainer= ({greeting})=>{
    const [data,setData]=useState([]);
        const {id} = useParams();
        useEffect(()=>{ 
            if(id){
                Data()
                    .then(result=> setData(result.filter(item=> item.category == id)))
                    .catch(err=> console.log(err))
            }else{ 
                Data()
                    .then(result=> setData(result))
                    .catch(err=> console.log(err))
            }
        }, [id])
    return(
        <main>
            <div><h2>{greeting}</h2></div>
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