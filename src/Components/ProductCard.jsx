import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top object-fit-contain p-3"
        style={{ height: "200px" }}
      />
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold text-success">${product.price}</p>
        <p className="card-text text-muted">{product.category}</p>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(addToWishlist(product))}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
