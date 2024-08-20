import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { me } from "@/data/auth/index.js";
import { useAuth } from "@/context/index.js";

export default function Me() {
//     const [meData, setMeData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const Data = await me();
//         setMeData(Data);
//       } catch (error) {
//         console.error("Fehler beim Abrufen der Daten:", error);
//       }
//     }

//     fetchData();
//   }, []);
  return (
    // meData && (
    //   <div>
    //     <h2>{meData.userName}</h2>
    //     <h2>{meData.email}</h2>
    //     <h2>{meData.firstName}</h2>
    //     <h2>{meData.lasttName}</h2>
    //     <h2>{meData.role}</h2>
    //   </div>
    // )
    <div>Me</div>
  );
}
