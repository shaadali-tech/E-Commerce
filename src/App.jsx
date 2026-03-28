import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Navbar from "./Components/Navbar";
import Catalog from "./pages/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
