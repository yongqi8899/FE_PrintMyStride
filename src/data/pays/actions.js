import { redirect } from 'react-router-dom';
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


  return redirect('/');
};
