import { Link, useNavigate, redirect } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "@/context/index.js";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const closeDetails = () => {
    detailsRef.current.removeAttribute("open");
  };
  // const handleLogout = () => {
  //   logout();
  //   closeDetails();
  //   navigate("/login");
  // };

  return (
    <header className="sticky top-0 flex text-gray-700 align-middle bg-primary navbar bold">
      <div className="flex-1">
        <Link to="/" className="text-xl btn btn-ghost">
          Logo
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="flex items-center gap-8 mr-6">
          <li>
            {" "}
            <Link
              to="/cart"
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </Link>
          </li>
          {isAuthenticated ? (
            <details ref={detailsRef} className="flex items-center bg-primary">
              <summary className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=82751&format=png&color=000000"
                  className="w-6"
                />
              </summary>
              <Link to="/me" onClick={closeDetails}>
                <p> Me</p>
              </Link>
              <Link onClick={logout}>Logout</Link>
            </details>
          ) : (
            <details ref={detailsRef} className="flex items-center bg-primary">
              <summary>Login</summary>
              <Link to="/login" onClick={closeDetails}>
                Login
              </Link>
              <Link to="/register" onClick={closeDetails}>
                Register
              </Link>
            </details>
          )}
        </ul>
      </nav>
    </header>
  );
}
