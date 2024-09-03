import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/index.js";
import { formatDate } from "@/utils/index.js";
import Alert from "@/components/Alert.jsx";

export default function Orders() {
  const orders = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!orders.length)
  return (
    <div className="mt-5">
      <Alert message="You have no order. :(" />
    </div>
  );
  return (
    <>
      {orders && (
        <div className="overflow-x-auto">
          <table
            className="table"
            style={{ tableLayout: "fixed", width: "100%" }}
          >
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>

                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {formatDate(order.orderDate)}
                    </span>
                  </td>
                  <td className="align-middle">
                    <span className="badge badge-secondary">
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => navigate(`/orders/${order._id}`)}
                    >
                      details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
