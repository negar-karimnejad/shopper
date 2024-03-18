import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProductProvider } from './context/ProductContext';
import AboutUs from './pages/AboutUs';
import AddProduct from './pages/AddProduct';
import AdminPanel from './pages/AdminPanel';
import AppLayout from './pages/AppLayout';
import Cart from './pages/Cart';
import Conatct from './pages/Conatct';
import CreateProduct from './pages/CreateProduct';
import Homepage from './pages/Homepage';
import Kids from './pages/Kids';
import ListProducts from './pages/ListProducts';
import Login from './pages/Login';
import Men from './pages/Men';
import Offices from './pages/Offices';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './pages/Register';
import Women from './pages/Women';

function App() {
  return (
    // <AuthProvider>
      <ProductProvider>
        {/* <CartProvider> */}
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="kids" element={<Kids />} />
                <Route path="women" element={<Women />} />
                <Route path="men" element={<Men />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="conatct" element={<Conatct />} />
                <Route path="offices" element={<Offices />} />
                <Route path="create-product" element={<CreateProduct />} />
                <Route path="products/:query" element={<Products />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />

                <Route element={<AdminPanel />}>
                  <Route
                    index
                    path="list-products"
                    element={<ListProducts />}
                  />
                  <Route path="add-product" element={<AddProduct />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        {/* </CartProvider> */}
      </ProductProvider>
    // </AuthProvider>
  );
}

export default App;
