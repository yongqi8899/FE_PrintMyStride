import ProductsCard from "../components/ProductsCard";
const Home = () => {
  return (
    <div className="flex flex-col gap-10 m-10 ">

      {/* <div className="grandient-lisa-dark-90 "></div> */}
      {/* <div className="grandient-tiffany"></div> */}
      <button className="btn-gradient w-20">hello</button>
      <h1>Home</h1>
      <ProductsCard
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="shoes"
      >
      </ProductsCard>
    </div>
  );
}
export default Home;
