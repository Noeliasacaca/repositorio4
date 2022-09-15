import Item from '../containers/Item';

const ItemList =( {items})=> {
    return(
                items.map(item=>(
                    <Item 
                    key={item.id}
                    id={item.id} 
                    title={item.title}
                    price={item.price}
                    img={item.img}/>
                ))
    )
}
export default ItemList;