
const products = [
{
    id:'1',
    nombre:'Mouse1',
    price: 2000,
    category:'Mouse',
    img:'https://th.bing.com/th/id/OIP.A5s_LwYv8OU4bTrQC3o9uwHaHJ?w=205&h=198&c=7&r=0&o=5&pid=1.7',
    stock: 5,
    description:"conexion USB"

},

{
    id:'2',
    nombre:'Mouse2',
    price: 2000,
    category:'Mouse',
    img:'https://th.bing.com/th/id/OIP.A5s_LwYv8OU4bTrQC3o9uwHaHJ?w=205&h=198&c=7&r=0&o=5&pid=1.7',
    stock: 2,
    description:"conexion USB"
}


]


export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 400);
  }
  )
}

export const getProductsByID = (productsId) => {
    return new Promise((resolve)=>{
        setTimeout( () =>{
            resolve(products.find(prod => prod.id === productsId))
        },400)
 })
} 

