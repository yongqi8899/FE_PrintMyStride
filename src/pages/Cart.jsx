import { Alert, CartTable } from "@/components";
import { useCart } from "@/context";
import { useEffect } from "react";

const Cart = () => {
  const { cart, setCart } = useCart();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart, cart]);

  if (!cart.length>0)
    return (
      <div className="mt-5">
        <Alert message="Your cart is empty :(" />
      </div>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
