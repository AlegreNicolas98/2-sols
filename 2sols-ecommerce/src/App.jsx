
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CarritoContext } from './components/CartContext/CartContext';
import Titulo from './components/ItemListContainer/Titulo/Titulo';
import CarouselSlide from './components/Estructura/Carousel/Carousel';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Estructura/Footer/Footer';
import Section from './components/Estructura/Section/Section';




function App() {
  return (
    <CarritoContext>
<BrowserRouter> 
        <div>
          <NavBar/>
          <CarouselSlide/>
          <Titulo/>          
         <Routes>
            <Route path='/' element={<ItemListContainer />  }/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />  }/>
            <Route path='/categoriaId' element={<ItemListContainer />  }/>
            <Route path='/categoriaId' element={<ItemListContainer />  }/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>  }/>
            <Route path='/cart' element={  <Cart/>  }/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Section/>
          <Footer/>
         </div>    
</BrowserRouter>
</CarritoContext>

  )
}

export default App;
