import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import { ShopCates } from './pages/ShopCategories/ShopCates';
import { Products } from './pages/Products/Products';
import AddProduct from './components/products/AddProduct';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/employee" element={<AddProduct/>}/>
        <Route path="men" element={<ShopCates category="men"/>}/>
        <Route path="women" element={<ShopCates category="women"/>}/>
        <Route path="kids" element={<ShopCates category="kids"/>}/>
        <Route path="product" element={<Products/>}>
          {/* <Route path="/:productID" element={<Products/>}/> */}
        </Route>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
