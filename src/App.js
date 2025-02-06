import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import { ShopCates } from './pages/ShopCategories/ShopCates';
import { Products } from './pages/Products/Products';
import AddProduct from './components/products/AddProduct';
import { Footer } from './components/Footer/Footer';
import menBanner from './components/assets/img/banner_mens.png'
import kidsBanner from './components/assets/img/banner_kids.png'
import womenbanner from './components/assets/img/banner_women.png'
import { LoginSignUp } from './pages/LoginSignUp/LoginSignUp';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/employee" element={<AddProduct/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
        <Route path="men" element={<ShopCates shows={menBanner} category="men"/>}/>
        <Route path="women" element={<ShopCates shows={womenbanner} category="women"/>}/>
        <Route path="kids" element={<ShopCates shows={kidsBanner} category="kid"/>}/>
        <Route path="product" element={<Products/>}>
        
          {/* <Route path="/:productID" element={<Products/>}/> */}
        </Route>
        
   
        
      </Routes>
      <Footer/> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
