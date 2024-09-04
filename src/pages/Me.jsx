import { useAuth } from "@/context/index.js";

export default function Me() {
  const { user } = useAuth();
  if (!user) return <div>loading...</div>;
  return (
    user && (
      <div className="max-w-xl m-auto shadow-xl card card-side bg-neutral">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.userName}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      </div>
    )
  );
}
