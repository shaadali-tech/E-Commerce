import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cart/cartSlice";

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
        <button
          className="btn btn-primary mt-auto"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
