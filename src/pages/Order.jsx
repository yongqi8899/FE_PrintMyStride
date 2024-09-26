import { useLoaderData } from "react-router-dom";
import { memo } from "react";
import { FaShoePrints } from "react-icons/fa";
import { SiBlueprint } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";

const Order = memo(() => {
  const order = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center gap-10 m-auto mt-10">
      <div className="flex flex-col items-center text-xl max-w-gl md:mt-20">
        {order.status == "payed" && (
          <>
            <div>
              Status: <p className="badge badge-secondary">Paid</p>
            </div>
            <p>
              You will receive the foot impression in 2 days. Please make your
              foot impression as soon as possible.
            </p>
            <MdPayment fontSize="8em" />
          </>
        )}
        {order.status == "feet_impression" && (
          <>
            <div>
              Status: <p className="badge badge-secondary">Foot Impression</p>
            </div>
            <p>
              We have received your foot impression. Your custom shoes are now
              being prepared.
            </p>
            <FaShoePrints fontSize="8em" />
          </>
        )}
        {order.status == "3D_Druck" && (
          <>
            <div>
              Status: <p className="badge badge-secondary">3D Print</p>
            </div>
            <p>
              Your custom shoes are currently in the 3D printing process. They
              will be ready soon.
            </p>
            <SiBlueprint fontSize="8em" />
          </>
        )}
        {order.status == "shoe_shipped" && (
          <>
            <div>
              Status: <p className="badge badge-secondary">Shoe Shipped</p>
            </div>
            <p>Your shoes have been shipped. You will receive them shortly.</p>
            <FaShippingFast fontSize="8em" />
          </>
        )}
        {order.status == "shoe_delivered" && (
          <>
            <div>
              Status: <p className="badge badge-secondary">Shoe Delivered</p>
            </div>
            <p>Your shoes have been delivered. We hope you enjoy them!</p>
            <CiDeliveryTruck fontSize="8em" />
          </>
        )}
      </div>

      <ul className="timeline md:mt-10">
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
          <div className="timeline-end timeline-box">Paid</div>
          <hr className="bg-green-700" />
        </li>
        <li>
          <hr className="bg-green-700" />
          <div className="timeline-start timeline-box">Foot Impression</div>
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
          <div className="timeline-end timeline-box">Shoes Printed</div>
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
          <div className="timeline-start timeline-box">Shoes Shipped</div>
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
          <div className="timeline-end timeline-box">Enjoy :)</div>
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
});
export default Order;
