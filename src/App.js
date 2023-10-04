
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App(){

  return(
    <div className='App' >
      <BrowserRouter>
          <NavBar/>
          <ItemListContainer greeting={"Lista de Producto"}/>
          <Routes>
              <Route path='/' element= {<ItemListContainer />}/>
              <Route path='/caregory/:categoriaId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
              <Route path='*'  element= {<h1>404 NOT FOUND</h1>}/>
            </Routes>   
      </BrowserRouter>
      <ItemDetailContainer/>
    </div>
  );
}
export default App;