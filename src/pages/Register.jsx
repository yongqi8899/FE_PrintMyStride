import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signup } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

export default function Register() {
  const { isAuthenticated, setCheckSession, setIsAuthenticated } = useAuth();
  const [{ userName, email, password, confirmPassword }, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!userName || !email || !password || !confirmPassword)
        throw new Error("All fields are required");
      if (password !== confirmPassword)
        throw new Error("Passwords do not match");
      setLoading(true);
      const res = await signup({
        userName,
        email,
        password,
      });
      toast.success(res.success);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsAuthenticated(true);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={location.state?.next || "/"} />;
  }

  return (
    <div className="flex flex-wrap items-center min-h-[calc(100vh-4rem)] justify-around">
      <div className="flex flex-col m-auto">
        <p className="text-6xl font-redressed md:text-8xl">
          {" "}
          Get Your Perfect Fit!
        </p>
      </div>
      <div className="relative w-4/5 p-10 m-auto border rounded-2xl md:w-2/5 bg-neutral">
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Signup</h1>
          <p>Just some details to get you in.!</p>
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
              name="userName"
              value={userName}
              onChange={handleChange}
              className="grow"
              placeholder="User name"
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
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <label className="flex items-center gap-2 grow input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              type="password"
              className="grow"
              placeholder="Confirm your password..."
            />
          </label>

          <button className="btn btn-gradient" disabled={loading}>
            Create Account
          </button>
          <div className="relative flex items-center my-1">
            <div className="flex-grow border-t"></div>
            <span className="flex-shrink mx-4 text-xs">OR</span>
            <div className="flex-grow border-t "></div>
          </div>
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in!
            </Link>
          </small>
        </form>
        <div className="grandient-lisa"></div>
        <div className="grandient-tiffany"></div>
      </div>
    </div>
  );
}
