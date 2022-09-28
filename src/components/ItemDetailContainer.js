import { useState, useEffect } from 'react';
import Data from '../utils/Data';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{ 
        Data()
            .then(result=> setData(result.find(item=> item.id === parseInt(id))))
            .catch(err=> console.log(err))
    }, [id]);
    return(
        <><h6>detalles</h6>
            <ItemDetail 
                item={data}
            /> 
        </>
    );
}
export default ItemDetailContainer;

