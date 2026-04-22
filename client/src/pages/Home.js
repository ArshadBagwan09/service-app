import { useEffect, useState } from "react";
import API from "../services/api";
import WorkerCard from "../components/WorkerCard";
import services from "../data/services";

function Home() {
  const [workers, setWorkers] = useState([]);
  const [selectedService, setSelectedService] = useState("");

  const fetchWorkers = async () => {
    const res = await API.get("/workers");
    setWorkers(res.data);
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  // 🔥 Filter by service
  const filteredWorkers = selectedService
    ? workers.filter((w) => w.service === selectedService)
    : workers;

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-3">Select Service</h2>

      {/* 🔥 Service Buttons */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
        {services.map((service, i) => (
          <button
            key={i}
            className={`btn ${selectedService === service ? "btn-primary" : "btn-outline-primary"
              }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Workers List */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredWorkers.map((w, i) => (
          <WorkerCard key={i} worker={w} />
        ))}
      </div>
    </div>
  );
}

export default Home;