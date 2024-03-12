
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
