import { useOutletContext, Link } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";
const Home = () => {
  const products = useOutletContext();
  console.log(products);

  return (
    <div className="flex flex-col gap-10 m-10 ">
      <button className="w-20 btn-gradient">hello</button>
      <div className="grid grid-cols-3 gap-4">
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <Link to={`/products/${product._id}`} className="block">
                <ProductsCard src={product.image} title={product.title}>
                  <div className="flex flex-col m-auto text-center">
                    <p className="text-2xl font-redressed">$ {product.price}</p>
                    <p className="text-2xl text-secondary font-redressed">
                      {product.title}
                    </p>
                    <p>{product.summary}</p>
                  </div>
                </ProductsCard>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
