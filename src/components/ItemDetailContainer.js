import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { db } from "../utils/firebaseConfig";
import { doc, getDoc ,query} from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{ 
        async function GetFBData(){
            const productos = query(doc(db, "data",id))
            const docSnap = await getDoc(productos);
            setData({...docSnap.data(),id:id})
        }
        GetFBData()
        
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

