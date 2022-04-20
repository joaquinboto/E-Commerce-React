import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import {SubMenu} from './components/SubMenu';
import ItemDetailContainer from './components/ItemDetailContainer';
import { AnimatePresence} from "framer-motion"
import CardContextProvider from './components/CardContext';
import Cart from './components/Cart';

function App() {
  return (
    

    <CardContextProvider>
    <BrowserRouter>
      <NavBar />
      <SubMenu/>
      <AnimatePresence>
    <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategory' element={<ItemListContainer/> } />
        <Route path='/Item/:ItemId' element={<ItemDetailContainer/>} />
        <Route path='/Cart' element={<Cart/>} />
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
    </CardContextProvider>
  );
}



export default App;
