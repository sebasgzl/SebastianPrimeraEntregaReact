
import {  useState, useEffect} from "react";
import { getProductsByID } from "../../aproduct";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


  const ItemDetailContainer = () => {
    const[ product, setProduct] = useState(null)
    const {ItemId} = useParams()
    
    useEffect(()=>{
        getProductsByID (ItemId)
        .then( response => {
            setProduct (response)
        })
        .catch(error => {
            console.error(error)
        })
}, [ItemId])

return(
    <div>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer
