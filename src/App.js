import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import { ShopContextProvider } from './context/shopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
       
    </div>
  );
}

export default App;
