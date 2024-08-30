import { addToCart, formatCurrency, removeFromCart } from "@/utils/cartUtils";
import { useCart } from "@/context";
import { useLoaderData, useNavigate } from "react-router-dom";
import Img from "@/components/Img";
import { useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);

  const product = useLoaderData();
  const productInCart = cart.find((p) => p?._id === product._id);
  const goToCart = (e) => {
    e.preventDefault();
    return navigate("/cart");
  };
  const goToShopping = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <>
      {product && (
        <div className="flex-wrap items-center m-10 my-10 md:my-20 card card-side w-90vw">
          <div className="md:w-1/2">
            <Img src={product.image} title={product.title} />
          </div>

          <div className="card-body md:w-1/2">
            <h2 className="text-3xl truncate">{product.title}</h2>
            <p className="text-xl text-secondary">
              {formatCurrency(product.price)}{" "}
            </p>
            <p>{product.summary}</p>
            <div className="items-center justify-start card-actions">
              {productInCart ? (
                <>
                  <button
                    className="btn btn-gost"
                    onClick={() =>
                      setCart((prev) => removeFromCart(prev, product))
                    }
                  >
                    -
                  </button>
                  <span> {productInCart.quantity}</span>
                  <button
                    className="btn btn-gost"
                    onClick={() => setCart((prev) => addToCart(prev, product))}
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-gradient-blue"
                  onClick={() => setCart((prev) => addToCart(prev, product))}
                >
                  Add to cart
                </button>
              )}
              <button className="btn btn-gradient-blue" onClick={goToCart}>
                Go to Cart
              </button>
              <button className="btn btn-gradient-blue" onClick={goToShopping}>
                Continue Shopping
              </button>
            </div>
            <div className="my-10 ">
              <h3 className="text-2xl font-redressed text-secondary">
                Product Description:
              </h3>
              <div>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
