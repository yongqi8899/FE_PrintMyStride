import {useAuth} from "@/context";
export const getAllOrders = async () => {
  const res = await fetch(`http://localhost:8080/orders?userId=${user._id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
export const getOneOrder = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
