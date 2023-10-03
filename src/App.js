
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <div>
      <NavBar/>
      <div>
      <ItemListContainer greeting = "lista de productos" />
     
      <ItemDetailContainer/>
      </div>
    </div>
    
  );
}

export default App;
