import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Order() {
  const order = useLoaderData();
  const navigate = useNavigate();
  console.log("order id Order", order);
  return (
    <div className="flex flex-col items-center gap-10 mt-20 ">
      <p className="max-w-gl text-xl md:mt-20">
        Status: <div className="badge badge-secondary">{order.status}</div>
        {order.status == "payed" && (
          <p>
            You will receive the foot impression in 2 days. Please make your
            foot impression as soon as possible.
          </p>
        )}
        {order.status == "feet_impression" && (
          <p>
            We have received your feet impression. Your custom shoes are now
            being prepared.
          </p>
        )}
        {order.status == "3D_Druck" && (
          <p>
            Your custom shoes are currently in the 3D printing process. They
            will be ready soon.
          </p>
        )}
        {order.status == "shoe_shipped" && (
          <p>Your shoes have been shipped. You will receive them shortly.</p>
        )}
        {order.status == "shoe_delivered" && (
          <p>Your shoes have been delivered. We hope you enjoy them!</p>
        )}
      </p>

      <ul className="timeline md:mt-20">
        <li>
          <div className="timeline-start timeline-box">Designed Shoes</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-green-700" />
        </li>
        <li>
          <hr className="bg-green-700" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">payed</div>
          <hr className="bg-green-700" />
        </li>
        <li>
          <hr className="bg-green-700" />
          <div className="timeline-start timeline-box">Feet impression</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                [
                  "shoe_shipped",
                  "shoe_delivered",
                  "Feet_impression",
                  "3D_Druck",
                ].includes(order.status)
                  ? "green"
                  : "currentColor"
              }
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {[
            "shoe_shipped",
            "shoe_delivered",
            "Feet_impression",
            "3D_Druck",
          ].includes(order.status) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
        </li>
        <li>
          {["shoe_shipped", "shoe_delivered", "3D_Druck"].includes(
            order.status
          ) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                ["shoe_shipped", "shoe_delivered", "3D_Druck"].includes(
                  order.status
                )
                  ? "green"
                  : "currentColor"
              }
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">Druck your Shoes</div>
          {["shoe_shipped", "shoe_delivered"].includes(order.status) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
        </li>
        <li>
          {["shoe_shipped", "shoe_delivered"].includes(order.status) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
          <div className="timeline-start timeline-box">Shoes shipped</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                ["shoe_shipped", "shoe_delivered"].includes(order.status)
                  ? "green"
                  : "currentColor"
              }
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {["shoe_shipped", "shoe_delivered"].includes(order.status) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
        </li>
        <li>
          {["shoe_delivered"].includes(order.status) ? (
            <hr className="bg-green-700" />
          ) : (
            <hr />
          )}
          <div className="timeline-start timeline-box">Enjoy your schoes</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                ["shoe_delivered"].includes(order.status)
                  ? "green"
                  : "currentColor"
              }
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  );
}
