import { useDispatch } from "react-redux";
import { increaseQuantity, removefromcart } from "../Features/cart/cartSlice";

const Cartitems = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={item.image} alt={item.title} className="img-fluid w-75" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">${item.price.toFixed(2)}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
            {item.quantity >= 1 && (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removefromcart(item.id))}
                >
                  Remove One
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  Increase Quantity
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
