import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
 <NavBar/>
 <h1 style={{"text-align":"center","background":"#282c34","color":"green","padding":"1rem"}}>Listado de Productos</h1>
<ItemListContainer />
</div>
  )
}

export default App;
