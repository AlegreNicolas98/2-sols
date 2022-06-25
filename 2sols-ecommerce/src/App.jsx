import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
 <NavBar/>
<ItemListContainer greeting={'Proximamente Productos Nuevos !!!'}/>
</div>
  )
}

export default App;
