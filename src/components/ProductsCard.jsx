import Img from "@/components/Img";
const ProductsCard = ({ src, title, children }) => {
  return (
    <div className="card glass w-full max-w-md hover:drop-shadow-[0_-5px_5px_#37cdbe] bg-neutral">
      <figure>
        <Img src={src} alt={title} />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};
export default ProductsCard;
