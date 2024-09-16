import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Devices from "./pages/Devices";
import { useState } from "react";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { useCycle } from "framer-motion";
function App() {
  const location = useLocation();
  const locationPath = location.pathname;
  const [value, _setValue] = useState<string>("");
  console.log(value);
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Header mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <Routes>
        <Route element={<Home mobileNav={mobileNav} cartIsOpen={cartIsOpen} />} path="/" />
        <Route element={<Devices value={value} />} path="/Device" />
        <Route element={<Product />} path="/product" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
      <Footer locationPath={locationPath} />
    </>
  );
}

export default App;
