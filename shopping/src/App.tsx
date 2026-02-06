import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import OurBlog from './pages/OurBlog';
import ProductDetail from './pages/ProductDetails';
import Products from './pages/Products';
import { CartProvider } from "./contexts/CartContext";
import { CartDrawer } from "./components/cart/CartDrawer";
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Promotion from './pages/Promotion';
import Profile from './pages/Profile';
import WishList from './pages/WishList';
import Pages from './pages/Pages';
import { Toaster } from 'react-hot-toast';
import { WishlistProvider } from './contexts/WishlistContext';

const App = () => {
  return (
    <CartProvider>
      <CartDrawer />
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <WishlistProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/our-blog' element={<OurBlog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/promotion' element={<Promotion />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/pages' element={<Pages />} />
        </Routes>
      </WishlistProvider>
      <Footer />
    </CartProvider>
  );
};

export default App;
