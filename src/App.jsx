import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import "./index.css";
import Navbar from "./Components/Navbar";
import Orders from "./pages/Orders";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./pages/catalog";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <Router>
      <Toaster position="top-center" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
