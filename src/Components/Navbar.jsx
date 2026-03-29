import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0">My Store</h1>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/catalog">
              Catalog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/wishlist">
              Wishlist
            </Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/orders">
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
