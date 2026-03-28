import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Navbar from "./Components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./pages/catalog";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
