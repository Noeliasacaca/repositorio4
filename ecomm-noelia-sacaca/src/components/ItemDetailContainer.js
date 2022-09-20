import { useState ,useEffect} from 'react';
import Data from '../utils/Data';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ({greeting})=>{
    const [data,setData] = useState({});
    const {detalleId} = useParams();
    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTime(() => {
                resolve (Data)
            },2000)
        });
        getData.then(res => setData(res.find(Data => Data.category == parseInt (detalleId))))
    }, [])
    return(
        <>
        <h2>{greeting}</h2>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;