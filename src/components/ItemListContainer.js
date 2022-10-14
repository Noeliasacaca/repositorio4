import { useEffect, useState } from 'react';
import { db }  from '../utils/firebaseConfig';
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs ,query ,where} from "firebase/firestore";


const ItemListContainer= ()=>{
    const [data,setData] = useState([]);
    const {id} = useParams();
    const [] = useState("");
    useEffect(()=>{ 
        async function GetFBData(){
            let products ;
            if(id == undefined){
                products = collection(db, "data")
            }else{
                products = query(collection(db, "data"),where('category',"==",id))
            }
            const querySnapshot = await getDocs(products);
            const FireBaseData=querySnapshot.docs.map( item =>( {
                id: item.id,
                ...item.data()
            }))
            setData(FireBaseData)
        }
        GetFBData()
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

