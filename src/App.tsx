import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Devices from "./pages/Devices";
import { useState } from "react";
function App() {
  const location = useLocation();
  const locationPath = location.pathname;
  const [value, setValue] = useState<string>("");
  console.log(value);
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home setValue={setValue} value={value} />} path="/" />
        <Route element={<Devices value={value} />} path="/Device" />
      </Routes>
      <Footer locationPath={locationPath} />
    </>
  );
}

export default App;
