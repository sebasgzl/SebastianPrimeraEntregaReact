import React from 'react'
import { Item } from '../Item/Item'
import {useState} from "react";
import "../ItemListContainer/ItemListContainer.css"
const ItemListContainer = ({greeting}) => {
  
    const[users, setUsers]= useState()
  
   const productos=[{
    id: 1,
    nombre:"teclado",
    /* imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3T3ZXsP7wGI0REwMll2lIjNJl7ZLTFomaSqiNBfm-SF0b7EekNcvAUVRP6fFZIx54bCk&usqp=CAU" */
  },
  {
    id:2,
    nombre:"mouse",

  }] 
  
  const newUser = productos.forEach((user)=>user.id === 1)
    
  function cambio () {
    setUsers(newUser);
    console.log(users)
  }
  
  
  
  return (
    <div >
        <h2 className='titulo'>{greeting}</h2>  

        <button onClick={cambio}>Clic</button>      
        <div>
            <Item user={users}/>
        </div>
  </div>
  )
}

export default ItemListContainer