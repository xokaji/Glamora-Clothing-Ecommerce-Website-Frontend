import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import AddProduct from './components/products/AddProduct';
import { Footer } from './components/Footer/Footer';
import { LoginSignUp } from './pages/LoginSignUp/LoginSignUp';
import { Lognow } from './pages/LogNow/Lognow';
import { Popular } from './components/Popular/Popular';
import ProductDisplay  from './components/ProductDisplay/ProductDisplay';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import { Men } from './pages/Men/Men';
import { Women } from './pages/Women/Women';
import { GiftCards } from './pages/GiftCards/GiftCards';
import { Accessories } from './pages/Accessories/Accessories';
import Profile from './pages/Profile/Profile';
import { CartProvider } from './context/CartContext';
import { EditProfile } from './pages/EditProfile/EditProfile';


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category/:categoryId" element={<Popular />} />
          <Route path="/product/:productId" element={<ProductDisplay />} />
          <Route path="/employee" element={<AddProduct />} />
          <Route path="/lognow" element={<Lognow />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/menProducts" element={<Men />} />
          <Route path="/womenProducts" element={<Women />} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/gifts" element={<GiftCards />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
