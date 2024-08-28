import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { me } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

export default function Me() {
  const { user } = useAuth();
  console.log(user);
  return (
    user&&(<div className="card card-side bg-neutral shadow-xl max-w-xl m-auto">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.userName}</h2>
        <p>{user.email}</p>
        <p>{user.role}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div> */}
      </div>
    </div>)
  );
}
