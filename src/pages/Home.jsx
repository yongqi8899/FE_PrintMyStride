import { Link, useLoaderData } from "react-router-dom";
import { memo } from "react";
import ProductsCard from "@/components/ProductsCard";
import { formatCurrency } from "@/utils/cartUtils";
const Home = memo(() => {
  const products = useLoaderData();

  return (
    <div className="grid gap-4 mx-auto justify-items-center md:grid-cols-3">
      {products &&
        products.map((product) => (
          <div key={product._id}>
            <Link to={`/products/${product._id}`} className="block">
              <ProductsCard src={product.image} title={product.title}>
                <div className="flex flex-col m-auto text-center">
                  <p className="text-2xl font-redressed">
                    {formatCurrency(product.price)}
                  </p>
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
  );
});
export default Home;
