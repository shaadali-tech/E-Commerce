import { useSelector } from "react-redux";
import Cartitems from "./Cartitems";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const total = cart.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="container-md">
      <div className="card w-50 mx-auto p-4 mt-4">
        <h1 className="mb-3">Your Shopping Cart</h1>

        {cart.items.length > 0 ? (
          <>
            {cart.items.map((item) => (
              <Cartitems key={item.id} item={item} />
            ))}
            <div className="mt-4">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <p className="text-muted">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
