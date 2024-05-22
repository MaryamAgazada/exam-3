import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider'

function Basket() {
    const {basket,addBasket,decreaseBasket,removeBasket}=useContext(BasketContext)
    console.log(basket);
  return (
    <div>
      { basket.map((x) => {
        return (
          <>
            <div className="cards" key={x._id}>
              <div className="card">
                <img src={x.image} alt="" />
                <p>{x.name}</p>
                <p>{x.price}</p>
                <p>count:{x.count}</p>
                <button onClick={()=>addBasket(x)}>+</button>
                <button onClick={()=>decreaseBasket(x)}>-</button>
                <button onClick={()=>removeBasket(x)}>remove</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  )
}


export default Basket
