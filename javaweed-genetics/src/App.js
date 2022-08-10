import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ItemGenetics from './pages/ItemGenetics'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:iditem' element={<ItemDetails />} />
        <Route path='/:genetics' element={<ItemGenetics/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;