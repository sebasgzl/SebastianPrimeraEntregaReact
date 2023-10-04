

import "../Item/Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, nombre,img,price,stock}) => {
    return (
      <article className="article">
        <header>
          <h2>{nombre}</h2>
        </header>
        <picture>
          <img src={img} className="imgs" alt={nombre} />
        </picture>
        <section>
         <p>Precio:${price}</p>
         <p>Stock disponibles:{stock}</p>
        </section>
      <footer>
        <Link to={`/item/${id}`} className="verMas"> Ver Mas</Link>    
      </footer>
      </article>
    )
  }
  
  export default Item 
