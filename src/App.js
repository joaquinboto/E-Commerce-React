import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer props="Hola mundo"/>
    </>

  );
}



export default App;
