import React from 'react'
import ItemCount from "./ItemCount";

export const ItemDetail = ({ itemDetail }) => {
    return (
        <main>
            <div className="card col-12" key={itemDetail.id}>
                <p>{itemDetail.title}</p>
                <h5>${itemDetail.price}</h5>
                <div>
                    <img src={itemDetail.img}/>
                    <p>{itemDetail.description}</p>
                    <p>En stock {itemDetail.description}</p>
                </div>
                {
                    Count === 0 ?
                        <ItemCount
                            stock={item.stock}
                            initial="0"
                            onAdd={Handler}
                        /> :
                        <Link to='/cart'>
                            <button type="button" className="btn py-0 " >Checkout</button>
                        </Link>
                }
            </div>
        </main>
    )
}
export default ItemDetail;