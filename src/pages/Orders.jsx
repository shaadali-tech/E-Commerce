import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.placeOrderReducer.orders);
  return (
    <div className="container-md">
      <div className="card w-50 mx-auto p-4 mt-4">
        <h1 className="mb-3">Your Orders</h1>
        {orders.length > 0 ? (
          <ul className="list-group">
            {orders.map((order) => (
              <li key={order.id} className="list-group-item">
                <h5>Order #{order.id}</h5>
                <p>Total: ₹{order.total.toFixed(2)}</p>
                <p>Address: {order.address}</p>
                <p>Date: {order.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
