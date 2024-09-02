import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createPayment } from "@/data/pays/actions";

export default function PaymentPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  console.log("queryParams", queryParams);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createPayment();
      console.log("Zahlung erfolgreich");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Payment Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium hidden"></label>
          <input
            name="orderId"
            value={orderId}
            onChange={handleChange}
            type="text"
            className="w-full p-2 mt-2 border rounded hidden"
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
      </form>
    </div>
  );
}
