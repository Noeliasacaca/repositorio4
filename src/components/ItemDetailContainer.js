import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { db } from "../utils/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [data,setItem] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const getDato = async ()=>{
            const docSnap = await getDoc(doc(db, "products", id))
            const product = {id:id,...docSnap.data()}
            setItem(product)
        }
        getDato()

    }, [id]);
    return(
        <>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;

