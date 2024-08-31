import { useLoaderData, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/utils/cartUtils";

export default function Status() {
  const navigate = useNavigate();
  const order = useLoaderData();
  console.log(order);
  // let newOrderArray = order.map((o) => {
  //   let newProductsArray = o.products.map((p) => {
  //     return {
  //       quantity: p.quantity,
  //       ...p.productId,
  //     };
  //   });
  //   return {
  //     key: o._id,
  //     products: newProductsArray,
  //     status: o.status,
  //     orderDate: o.orderDate,
  //   };
  // });
  // console.log("newOrderArray", newOrderArray);
  return (
    <>
    order
      {/* {newOrderArray &&
        newOrderArray.map((o) => (
          <div key={o.key} className="flex gap-4">
            <p>{o.orderDate.split("T")[0]}</p>
            {o.products.map((p) => (
              <div key={p._id} className="flex gap-4">
                <p>{p.title}</p>
                <p>{p.quantity}</p>
              </div>
            ))}
            <p>{o.status}</p>
          </div> 
        ))}*/}
    </>
  );
}
