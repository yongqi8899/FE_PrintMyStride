import { useState } from "react";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  const [{ firstName, email, lastName, tel, message }, setForm] = useState({
    firstName: "",
    email: "",
    lastName: "",
    tel: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    console.log("submit");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 m-10 md:flex-row">
      <div className="w-full md:w-1/2">
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">contact us</h1>
          <label className="flex items-center gap-2 grow input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="grow"
              placeholder="firstname"
            />
          </label>
          <label className="flex items-center gap-2 grow input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              name="lastName"
              value={lastName}
              onChange={handleChange}
              type="lastName"
              className="grow"
              placeholder="lastname"
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="grow"
              placeholder="Email"
            />
          </label>

          <label className="flex items-center gap-2 grow input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.1 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .71 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.71A2 2 0 0 1 22 16.92z"></path>
            </svg>

            <input
              name="tel"
              value={tel}
              onChange={handleChange}
              type="tel"
              className="grow"
              placeholder="Telephone"
            />
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
          ></textarea>

          <button className="btn btn-gradient-blue" disabled={loading}>
            contact us
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/3">
        <ContactInfo />
      </div>
    </div>
  );
};
export default Contact;
