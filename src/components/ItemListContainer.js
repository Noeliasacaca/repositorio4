import { useEffect, useState } from 'react';
import Data from '../utils/Data';
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer= ()=>{
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
            <h2 className="text-center p-5">¡Contamos con productos de alta calidad!</h2>
            <ItemList 
                items={data} 
            />
        
        </main>
    )
}

export default ItemListContainer;