

import { useState, useEffect } from "react";
import { getProductsByID } from "../../aproduct";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[ product, setProduct] = useState(null)
    useEffect(()=>{
        getProductsByID ('1')
        .then( response => {
            setProduct (response)
        })
        .catch(error => {
            console.error(error)
        })
}, [])

return(
    <div>
        <ItemDetail {...product}/>
    </div>
)
}
export default ItemDetailContainer