import React, { useEffect } from "react";
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ItemGenetics from './pages/ItemGenetics'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import CartCustomContext from "./Contexts/CartContext";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase


function App() {
  
  useEffect(()=>{

    
    
  },[])
  
  
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


