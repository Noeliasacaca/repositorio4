import Item from '../containers/Item';

const ItemList =( {items})=> {
    return(
        <section>
            {
                items.map(item=>(
                    <Item 
                    key={item.id}
                    id={item.id} 
                    title={item.title}
                    price={item.price}
                    img={item.img}/>
                ))
            }
        </section>
    )
}

export default ItemList;