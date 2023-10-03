import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, nombre,img,price,stock}) => {
    return (
      <article>
        <header>
          <h2>{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} />
        </picture>
        <section>
         <p>Precio:${price}</p>
         <p>Stock disponibles:{stock}</p>
        </section>
      <footer>
         <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada",quantity)}/> 
      </footer>
      </article>
    )
  }
  
  export default ItemDetailContainer