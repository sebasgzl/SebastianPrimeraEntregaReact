
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <NavBar/>
      <div>
      <ItemListContainer greeting = "lista de productos" />
      </div>
    </div>
    
  );
}

export default App;
