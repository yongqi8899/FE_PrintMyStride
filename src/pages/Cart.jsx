import { useContext } from 'react';
import { CartContext } from '@/context';
import { Alert, CartTable } from '@/components';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  if (!cart.length)
    return (
      <div className='mt-5'>
        <Alert message='Your cart is empty :(' />
      </div>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
