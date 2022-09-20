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
    const {categoriaId} = useParams();
    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (Data)
            },2000)
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(function () {
                return Data.category === categoriaId;
            })))
        } else{
            getData.then(res => setData (res));
        }
    }, [categoriaId])


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