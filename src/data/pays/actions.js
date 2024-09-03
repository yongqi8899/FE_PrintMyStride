import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';
export const createPayment = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  await fetch(`${API_URL}/payments`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  toast("Pay success!");
  return redirect("/");
};
