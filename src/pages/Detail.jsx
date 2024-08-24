import { useOutletContext, Link, useParams } from "react-router-dom";
import Img from "@/components/Img";

const Detail = () => {
  const products = useOutletContext();
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const handleAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <>
      <div className="flex-wrap items-center m-10 my-10 md:my-20 card card-side w-90vw">
        <div className="md:w-1/2">
          <Img src={product.image} title={product.title} />
        </div>
        <div className="flex flex-col gap-5 m-auto mt-10 ">
          <p className="text-2xl font-redressed">$ {product.price}</p>
          <h2 className="text-2xl text-secondary font-redressed">
            {product.title}
          </h2>
          <p>{product.summary}</p>
          <div>
            <button className="btn">-</button>
            <span> 1</span>
            <button className="btn ">+</button>
          </div>
          <div className="justify-between card-actions">
            <button
              className="w-full btn btn-gradient-blue"
              onClick={handleAddToCart}
            >
              Add to Shopping Cart{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="m-10 my-10 ">
        <h3 className="mb-5 text-2xl font-redressed text-secondary">
          Product Description:
        </h3>
        <p>{product.description}</p>
      </div>
    </>
  );
};
export default Detail;
