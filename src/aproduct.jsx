
const products = [
    {
        id:'1',
        nombre:'Mouse1',
        price: 2000,
        category:'Mouse',
        img:'https://i.ibb.co/qNGG3St/mgg-014-mouse-gamer-computacion-removebg-preview.png',
        stock: 5,
        description:"conexion USB"
    
    },
    
    {
        id:'2',
        nombre:'Mouse2',
        price: 2000,
        category:'Mouse',
        img:'https://www.centrogar.com.ar/2397-home_default/mouse-xtrike-me-backlit-gm-216.jpg',
        stock: 2,
        description:"conexion USB"
    },
    
    {
      id:'3',
      nombre:'teclado1',
      price: 2000,
      category:'teclado',
      img:'https://www.centrogar.com.ar/2400-large_default/teclado-xtrike-me-gaming-kb-280.jpg',
      stock: 10,
      description:"conexion USB, mecanico"
  },

  {
    id:'4',
    nombre:'teclado2',
    price: 2000,
    category:'teclado',
    img:'https://i.ibb.co/zRkR4dB/1004360000233-1-removebg-preview.png',
    stock: 5,
    description:"conexion USB, mecanico"
},
    
    ]
    
    
    export const getProducts = () => {
      return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },400 );
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

  export const getProductsByCategory = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find((prod) => prod.id === productId);
        resolve(product);
      }, 400);
    });
  };