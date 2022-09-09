import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
      <ItemListContainer name="maceta"/>
      <ItemListContainer name="cenicero"/>
      <ItemListContainer name="sahumerio"/>
    </>  
  );
}

export default App;
