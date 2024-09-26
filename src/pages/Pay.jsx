import { useState, memo } from "react";
import { useLocation, Form } from "react-router-dom";

const PaymentPage = memo(() => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    orderId: orderId,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container p-8 mx-auto">
      <h2 className="mb-8 text-2xl font-bold">Payment Information</h2>
      <Form method="POST">
        <div>
          <label className="hidden block text-sm font-medium"></label>
          <input
            name="orderId"
            onChange={handleChange}
            type="text"
            className="hidden w-full p-2 mt-2 border rounded"
            placeholder="Full Name"
            defaultValue={orderId}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Address"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="State"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="ZIP Code"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="Country"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            type="text"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Card Number"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="CVV"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={`w-full p-3 mt-4 text-white  btn-gradient-blue rounded ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </Form>
    </div>
  );
})
