import ItemCount from './ItemCount';

const adding = (rate)=>{
    if(rate > 0 ){
        alert(` ${rate} productos se agregaron a tu carrito `)
    }
}
const ItemListContainer= ()=>{
        return(
            <main>
                <ItemCount 
                cantidad="10" 
                initial ="1" 
                onAdd={adding}/>
            </main>
        )
}
export default ItemListContainer;