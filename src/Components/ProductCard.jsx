import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../Features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.items);
  const wishlist = useSelector((state) => state.wishlistReducer.items);

  const isInCart = cart.some((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="card h-100 shadow-sm product-card-responsive">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top object-fit-contain p-3 product-img-responsive"
      />
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold text-success">${product.price}</p>
        <p className="card-text text-muted">{product.category}</p>
        <div className="mt-auto d-flex flex-wrap gap-2 justify-content-between">
          <button
            className={`btn w-100 mb-2 ${isInCart ? "btn-success" : "btn-primary"}`}
            onClick={() => dispatch(addToCart(product))}
            disabled={isInCart}
          >
            {isInCart ? "Added ✓" : "Add to Cart"}
          </button>
          <button
            className={`btn w-100 ${isInWishlist ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => dispatch(addToWishlist(product))}
            disabled={isInWishlist}
          >
            {isInWishlist ? "Wishlisted ❤️" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
