import { useDispatch, useSelector } from "react-redux";
import { removefromWishlist } from "../Features/cart/cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removefromWishlist(id));
  };
  return (
    <div className="container">
      <div className="card p-4 mt-4">
        <h1 className="mb-3">Your Wishlist</h1>
        {wishlist.items.length === 0 ? (
          <p className="text-muted">Your wishlist is currently empty.</p>
        ) : (
          <div className="row">
            {wishlist.items.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top object-fit-contain p-3"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text fw-bold text-success">
                      ${item.price}
                    </p>
                    <p className="card-text text-muted">{item.category}</p>
                    <button
                      className="btn btn-outline-danger mt-auto"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
