import { NavLink } from "react-router-dom";
import { ShoppingCart, Heart, Package, Home, LayoutGrid } from "lucide-react";
import "./Navbar.css";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0 fw-bold">My Store</h1>

        <ul className="navbar-nav ms-auto flex-row gap-3 align-items-center">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link d-flex align-items-center gap-1"
            >
              <Home size={18} /> Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/catalog"
              className="nav-link d-flex align-items-center gap-1"
            >
              <LayoutGrid size={18} /> Catalog
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/cart"
              className="nav-link d-flex align-items-center gap-1"
            >
              <ShoppingCart size={18} /> Cart
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/wishlist"
              className="nav-link d-flex align-items-center gap-1"
            >
              <Heart size={18} /> Wishlist
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/orders"
              className="nav-link d-flex align-items-center gap-1"
            >
              <Package size={18} /> Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-light btn-sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
