import { useEffect, useState } from 'react';
import { db }  from '../utils/firebaseConfig';
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer= ()=>{
    const [data]=useState([]);
    const {id} = useParams();
    useEffect(() => {
        const productCollection = collection(db, "products")
        let consult;
        if (id) {
            const filtro = query(productCollection, where("category", "==", id))
            consult = getDocs(filtro);
        }else{
            consult = getDocs(productCollection);
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