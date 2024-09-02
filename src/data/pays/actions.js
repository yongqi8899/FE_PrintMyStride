import { toast } from 'react-toastify';

export const createPayment = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log("createPayment",formData);
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/payments`, {
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
  return data;
};
