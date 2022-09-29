import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Cart from "./components/Navbar/Cart";

function App() {
  return (
    <>
    <div>
        <BrowserRouter>

          <Navbar/> 
          <Routes>
              <Route  path='/'  element={<ItemListContainer/>} />
              <Route path='/inicio' element={<ItemListContainer/>} />
              <Route exact path='category/:id' element ={<ItemListContainer/>}/>
              <Route exact path='detail/:id' element ={<ItemDetailContainer/>}/>
              <Route exact path='cart' element ={<Cart/>}/>
          </Routes>
          <Footer/>

        </BrowserRouter>

    </div>
</>
  );
}
export default App;
