


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
      <button>Ver detalles</button>
    </footer>
    </article>
  )
}

export default Item 
/* export const Item = (user) => {
    console.log(user)
  return (
    <div>Item</div>
  )
}
 */
