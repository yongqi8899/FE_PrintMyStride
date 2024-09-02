import { Alert, CartTable } from "@/components";
import { useCart } from "@/context";

const Cart = () => {
  const { cart, setCart } = useCart();

  if (!cart.length)
    return (
      <div className="mt-5">
        <Alert message="Your cart is empty :(" />
      </div>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
