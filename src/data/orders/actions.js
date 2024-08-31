import { toast } from 'react-toastify';

export const createOrder = async (userId, cart, navigate) => {
  const formData = {
    status: "payed",
    userId:  userId,
    products: cart.map(item => ({
      productId: item._id,
      quantity: item.quantity,
    }))
  };
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders`, {
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
  toast("Pay successfully");
  localStorage.removeItem("cart");
  return data;
};

export const deleteOrder = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/orders");
};
