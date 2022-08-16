import React from "react";
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ItemGenetics from './pages/ItemGenetics'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import CartCustomContext from "./Contexts/CartContext";



function App() {
  return (
    <div>
    <CartCustomContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:iditem' element={<ItemDetails />} />
          <Route path='/:genetics' element={<ItemGenetics/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </CartCustomContext>
    </div>
  );
}

export default App;


