import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemDetailContainer/>
    <Footer/>
    </>

  );
}

export default App;
