import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer name="maceta"/>
      <ItemListContainer name="cenicero"/>
      <ItemListContainer name="sahumerio"/>
      <Footer/>
    </>  
  );
}

export default App;
