import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:iditem' element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;