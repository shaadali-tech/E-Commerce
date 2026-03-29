import { useSelector, useDispatch } from "react-redux";
import Cartitems from "./Cartitems";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { clearCart } from "../Features/cart/cartSlice";
import { placeOrder } from "../Features/cart/cartSlice";
import Loader from "../Components/Loader";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");

  const total = cart.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    if (cart.items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (!address) {
      toast.error("Please enter your address!");
      return;
    }

    dispatch(placeOrder({ items: cart.items, total, address }));
    dispatch(clearCart());
    toast.success("Order placed successfully!");
  };

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (Loading) return <Loader />;

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
              <h3>Total: ₹{total.toFixed(2)}</h3>
            </div>

            <textarea
              className="form-control mb-3"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </>
        ) : (
          <p className="text-muted">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
