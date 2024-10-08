import { toast } from 'react-toastify';
const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';

export const createOrder = async (userId, cart) => {
 const formData = {
    status: "payed",
    userId:  userId,
    products: cart.map(item => ({
      productId: item._id,
      quantity: item.quantity,
    }))
  };
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',  
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error("An Error occured while paying");
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  localStorage.removeItem("cart");
  return data;
};

export const deleteOrder = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/orders");
};
