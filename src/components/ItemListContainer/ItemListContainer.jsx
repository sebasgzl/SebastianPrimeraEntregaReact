
import {useEffect, useState} from "react";
import "../ItemListContainer/ItemListContainer.css";
import { getProducts } from "../../aproduct";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => { 
    const[products, setProducts]= useState([])
  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  })
  return (
    <div>
      <h1 className="titulo">{ greeting }</h1>
      <ItemList products ={products}/>
    </div>
  )
  } 
  


export default ItemListContainer