import { Link } from 'react-router-dom';
import { addToCart, formatCurrency, removeFromCart, resetCart } from '@/utils/cartUtils';

const CartTable = ({ cart, setCart }) => {
  const paymentProcess = () => {
    alert('Payment process is not implemented yet. But coming soon!');
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Line total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td width='30%'>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='h-28 w-28 rounded-full'>
                      <img src={item.image} alt={item.title} className='bg-white !object-contain' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{item.title} </div>
                    <div className='text-sm opacity-50'>
                      Unit price: {formatCurrency(item.price)}
                    </div>
                  </div>
                </div>
              </td>
              <td width='50%'>
                {item.description}
                <br />
                <Link to={`/category/${item.category}`} className='badge badge-ghost badge-sm'>
                  {item.category}
                </Link>
              </td>
              <td width='10%' className='flex items-center justify-around w-full'>
                <button
                  className='btn btn-primary'
                  onClick={() => setCart(prev => removeFromCart(prev, item))}
                >
                  -
                </button>
                <span> {item.quantity}</span>
                <button
                  className='btn btn-primary'
                  onClick={() => setCart(prev => addToCart(prev, item))}
                >
                  +
                </button>
              </td>
              <td width='10%'>{formatCurrency(item.quantity * item.price)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>
              <button className='btn btn-secondary' onClick={() => setCart(resetCart())}>
                Reset cart
              </button>
            </th>
            <th>
              <button className='btn btn-success' onClick={paymentProcess}>
                Checkout:{' '}
                {formatCurrency(cart.reduce((acc, item) => acc + item.quantity * item.price, 0))}
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
