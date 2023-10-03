import "../ItemCount/ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock) {
            (quantity +1)
        }
}

const decrement = () => {
    if(quantity > 1) {
        (quantity -1)
    }
}

return(
   <div className="count">
   <div className="item-count">
        <button onClick={decrement}>-</button>
        <h4>{quantity}</h4>
        <button onClick={increment}>+</button>
    </div>
<div>
    <button onClick={()=> onAdd (quantity)} disabled={!stock}>Comprar</button>
</div>
   </div>
    )
}


export default ItemCount;