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

const App = () => {
  return (
    <CartProvider>
      <CartDrawer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/our-blog' element={<OurBlog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Products />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
