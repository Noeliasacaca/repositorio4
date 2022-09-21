import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route, } from "react-router-dom";

function App() {
  return (
    <>
  <BrowserRouter>
          <Routes>
            <Navbar/>
              <Route  path='/'  element={<ItemListContainer greeting={"¡Contamos con productos de alta calidad!"}/>} />
              <Route path='/inicio' element={<ItemListContainer/>} />
              <Route  path='/detalle' element={<ItemDetailContainer greeting={"¡productos detalle!"}/>} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
              <Route exact path='cart' element ={<Cart/>}/>
            <Footer/>
        </Routes>
  </BrowserRouter>
</>
  );
}
export default App;
