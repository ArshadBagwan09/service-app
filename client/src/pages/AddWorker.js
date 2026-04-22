import { useState } from "react";
import API from "../services/api";
import services from "../data/services";

function AddWorker() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    location: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name || !formData.service || !formData.phone) {
      alert("Please fill all required fields ❗");
      return;
    }

    try {
      setLoading(true);

      await API.post("/workers", formData);

      alert("Worker Added ✅");

      // Clear form
      setFormData({
        name: "",
        service: "",
        location: "",
        phone: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error adding worker ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center">➕ Add Worker</h3>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* 🔥 Dropdown */}
          <select
            className="form-control mb-3"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            {services.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>

          <input
            className="form-control mb-3"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Worker"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddWorker;