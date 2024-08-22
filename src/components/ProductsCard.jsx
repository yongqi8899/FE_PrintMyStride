import Img from "@/components/Img";
const ProductsCard = ({ src, title, children }) => {
  return (
    <div className="card glass w-96 hover:drop-shadow-[0_0_10px_#1E2CBF]">
      <figure>
        <Img src={src} alt={title} />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};
export default ProductsCard;
