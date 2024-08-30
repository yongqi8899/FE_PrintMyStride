import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signin } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

export default function Login() {
  const location = useLocation();
  const { isAuthenticated, setCheckSession, setIsAuthenticated } = useAuth();
  const [{ email, password }, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error("All fields are required");
      setLoading(true);
      const res = await signin({
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
    <div className="flex flex-wrap items-center min-h-[calc(100vh-3rem)] justify-around z-10">
      <div className="flex flex-col m-auto">
        <p className="text-6xl font-redressed md:text-8xl">Welcome Back!</p>
      </div>
      <div className="w-4/5 p-10 m-auto border rounded-2xl md:w-2/5 bg-neutral">
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Login</h1>
          <p>Glad you’re back.!</p>
          <label className="flex items-center gap-2 input input-bordered">
            <MdEmail />
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="grow "
              placeholder="Email"
            />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            <FaKey />
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <button className="btn btn-gradient-blue" disabled={loading}>
            Login
          </button>
          <div className="relative flex items-center my-1">
            <div className="flex-grow border-t"></div>
            <span className="flex-shrink mx-4 text-xs">OR</span>
            <div className="flex-grow border-t "></div>
          </div>
          <div className="flex justify-center gap-2">
            <FaFacebook color="#1877f2" fontSize="1.5em" />
            <FcGoogle fontSize="1.5em" />
            <FaGithub fontSize="1.5em" />
          </div>

          <small>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Signup!
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}
