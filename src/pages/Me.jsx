import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { me } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

export default function Me() {
  return (
    <div>Me</div>
  );
}
