import { redirect } from "react-router-dom";
import { showToast } from "@/utils/index";

const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';
export const createProduct = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "create failed!", "create success!");
  return redirect("/products");
};

export const updateProduct = async ({ params, request }) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  showToast(res, "update failed!", "update success!");
  return redirect(`/products/${id}`);
};

export const deleteProduct = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/products");
};
