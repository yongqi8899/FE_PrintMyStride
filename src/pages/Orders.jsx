import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/index.js";
import {formatDate} from "@/utils/index.js";

export default function Orders() {
  const data = useLoaderData();
  const navigate = useNavigate()
  const { user } = useAuth();
  const orders = data.filter((o) => o.userId._id === user._id);
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
                <span className="badge badge-secondary">{order.status}</span>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => navigate(`/orders/${order._id}`)}
                >
                  details
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
