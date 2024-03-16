import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddProduct from './pages/AddProduct';
import AdminPanel from './pages/AdminPanel';
import AppLayout from './pages/AppLayout';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Kids from './pages/Kids';
import ListProducts from './pages/ListProducts';
import Login from './pages/Login';
import Men from './pages/Men';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Register from './pages/Register';
import Women from './pages/Women';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="kids" element={<Kids />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />

            <Route element={<AdminPanel />}>
              <Route index path="list-products" element={<ListProducts />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
