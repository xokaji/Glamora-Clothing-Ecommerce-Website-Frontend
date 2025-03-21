import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import { ShopCates } from './pages/ShopCategories/ShopCates';
import AddProduct from './components/products/AddProduct';
import { Footer } from './components/Footer/Footer';
import kidsBanner from './components/assets/img/banner_kids.png';
import { LoginSignUp } from './pages/LoginSignUp/LoginSignUp';
import { Lognow } from './pages/LogNow/Lognow';
import { Popular } from './components/Popular/Popular';
import ProductDisplay  from './components/ProductDisplay/ProductDisplay';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category/:categoryId" element={<Popular />} />
          <Route path="/product/:productId" element={<ProductDisplay />} />
          <Route path="/employee" element={<AddProduct />} />
          <Route path="/lognow" element={<Lognow />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/category" element={<ShopCates />} />
          <Route path="/kids" element={<ShopCates shows={kidsBanner} category="kid" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
