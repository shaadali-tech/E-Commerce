import { useSelector } from "react-redux";
import Cartitems from "./Cartitems";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);

  return (
    <div className="container">
      <div className="card p-4 mt-4">
        <h1 className="mb-3">Your Shopping Cart</h1>

        {cart.items.length > 0 ? (
          <>
            {cart.items.map((item) => (
              <Cartitems key={item.id} item={item} />
            ))}
          </>
        ) : (
          <p className="text-muted">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
