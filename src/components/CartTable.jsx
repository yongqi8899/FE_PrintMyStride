import {
  addToCart,
  formatCurrency,
  removeFromCart,
  resetCart,
} from "@/utils/cartUtils";
import Img from "@/components/Img";

const CartTable = ({ cart, setCart }) => {
  const paymentProcess = () => {
    alert("Payment process is not implemented yet. But coming soon!");
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Line total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded-full h-28 w-28">
                      <Img src={item.image} alt={item.title} />
                    </div>
                  </div>
                </div>
              </td> 
              <td>{item.title}</td>
              <td>
                <div className="text-sm opacity-50">
                  {formatCurrency(item.price)}
                </div>
              </td>
              <td
              >
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
              <td width="10%">{formatCurrency(item.quantity * item.price)}</td>
            </tr>
          ))}
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
              <button className="btn btn-gradient-blue" onClick={paymentProcess}>
                Checkout:{" "}
                {formatCurrency(
                  cart.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )
                )}
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
