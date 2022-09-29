import { useEffect, useState } from 'react';
import { db }  from '../utils/firebaseConfig';
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            if (id){
                const q =  query(collection(db, "products"), where("id", "==", id))
            
                const consulta = await getDocs(q)
                const products = consulta.docs.map(item=>({
                    id:item.id,...item.data()
                })) 
                setData(products)
            }
            else{
                const consulta = await getDocs(collection(db, "products"))
                const products = consulta.docs.map(item=>({
                    id:item.id,...item.data()
                })) 
                setData(products)
            }
        }
        getData()
    }, [id])

    console.log(data)
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