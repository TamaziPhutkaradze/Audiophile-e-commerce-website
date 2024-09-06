import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Devices from "./pages/Devices";
import { useState } from "react";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
function App() {
  const location = useLocation();
  const locationPath = location.pathname;
  const [value, _setValue] = useState<string>("");
  console.log(value);
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Devices value={value} />} path="/Device" />
        <Route element={<Product />} path="/product" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
      <Footer locationPath={locationPath} />
    </>
  );
}

export default App;
