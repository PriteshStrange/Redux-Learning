import { Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import CartDetails from './Component/CartDetails';
import Header from './Component/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Cart/>}/>
        <Route path='/cart/:id' element={<CartDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
