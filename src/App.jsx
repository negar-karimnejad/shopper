import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Kids from "./pages/Kids";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="kids" element={<Kids />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
