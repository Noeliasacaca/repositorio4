import { useState ,useEffect} from 'react';
import Data from '../utils/Data';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    useEffect(()=>{
        Data()
        .then(result=> setData(result[3]))
        .catch(err=> console.log(err))
    }, []);
    return(
        <>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;