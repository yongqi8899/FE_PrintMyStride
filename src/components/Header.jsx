import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "@/context/index.js";

export default function Header() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const { isAuthenticated, logout } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setActive(path);
  };
  const closeDetails = () => {
    detailsRef.current.removeAttribute("open");
  };
  return (
    <header className="sticky top-0 flex text-xl align-middle navbar bold font-redressed bg-neutral">
      <div className="flex-1">
        <NavLink to="/">
          <h1 className="text-4xl">PrintMyStride</h1>
        </NavLink>
      </div>
      <nav className="flex-none">
        <ul className="flex items-center gap-8 mr-6 item-center">
          <li>
            {" "}
            <NavLink
              to="/"
              role="button"
              className="text-xl btn btn-ghost"
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/about"
              role="button"
              className="text-xl btn btn-ghost"
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              role="button"
              className="text-xl btn btn-ghost"
            >
              Contact
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/cart"
              role="button"
              className="text-xl btn btn-ghost"
            >
              Cart
            </NavLink>
          </li>
          {isAuthenticated ? (
            <details ref={detailsRef} className="flex items-center ">
              <summary className="flex items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </summary>
              <NavLink to="/me" onClick={closeDetails}>
                <p> Me</p>
              </NavLink>
              <NavLink onClick={logout}>Logout</NavLink>
            </details>
          ) : (
            <details ref={detailsRef} className="flex items-center ">
              <summary>Login</summary>
              <NavLink to="/login" onClick={closeDetails}>
                Login
              </NavLink>
              <NavLink to="/register" onClick={closeDetails}>
                Register
              </NavLink>
            </details>
          )}
          <li>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={handleToggle}
              />
              <svg
                className="w-10 h-10 fill-current swap-on"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              
              <svg
                className="w-10 h-10 fill-current swap-off"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
