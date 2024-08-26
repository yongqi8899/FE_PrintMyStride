import {
  addToCart,
  formatCurrency,
  removeFromCart,
  resetCart,
} from "@/utils/cartUtils";
import Img from "@/components/Img";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartTable = ({ cart, setCart }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);
  const paymentProcess = () => {
    navigate("/pay");
  };
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="mx-auto h-28 w-28">
                  <div className="w-full h-full overflow-hidden rounded-full">
                    <Img src={item.image} alt={item.title} />
                  </div>
                </div>
              </td>
              <td>{item.title}</td>
              <td>
                <button
                  className="w-5 mx-2 btn btn-secondary"
                  onClick={() => setCart((prev) => removeFromCart(prev, item))}
                >
                  -
                </button>
                <span className="text-center"> {item.quantity}</span>
                <button
                  className="w-5 mx-2 btn btn-secondary"
                  onClick={() => setCart((prev) => addToCart(prev, item))}
                >
                  +
                </button>
              </td>
              <td>
                <div className="text-sm opacity-50">
                  {formatCurrency(item.price)}
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td className="text-xl"> Total: </td>
            <td>
              <h3 className="text-xl text-secondary">
                {formatCurrency(
                  cart.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )
                )}
              </h3>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>
              <button
                className="btn btn-gradient-blue"
                onClick={() => setCart(resetCart())}
              >
                Reset cart
              </button>
            </th>

            <th>
              <button
                className="w-20 btn btn-gradient-blue"
                onClick={paymentProcess}
              >
                Pay
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
