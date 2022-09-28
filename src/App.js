import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route, } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <header>
        <BrowserRouter>
          <Navbar/> 
          <Routes>
              <Route  path='/'  element={<ItemListContainer/>} />
              <Route path='/inicio' element={<ItemListContainer/>} />
              <Route exact path='category/:id' element ={<ItemListContainer/>}/>
              <Route exact path='detail/:id' element ={<ItemDetailContainer/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </header>
    </div>
</>
  );
}
export default App;
