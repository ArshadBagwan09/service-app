function WorkerCard({ worker }) {

  // 📱 Detect device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // 📞 Handle call / WhatsApp
  const handleContact = () => {
    // Ensure +91 format
    const phone = worker.phone.startsWith("+91")
      ? worker.phone
      : `+91${worker.phone}`;

    if (isMobile) {
      // Mobile → Direct Call
      window.location.href = `tel:${phone}`;
    } else {
      // Laptop/Desktop → WhatsApp
      window.open(`https://wa.me/${phone}`, "_blank");
    }
  };

  return (
    <div className="col">
      <div className="card shadow-sm h-100 hover-card">

        <div className="card-body">
          <h5 className="card-title">👨‍🔧 {worker.name}</h5>

          <p className="card-text">
            <strong>Service:</strong> {worker.service}
          </p>

          <p className="card-text">
            <strong>Location:</strong> {worker.location}
          </p>

          <p className="card-text">
            <strong>Phone:</strong> {worker.phone}
          </p>

          {/* 🔥 Smart Button */}
          <button
            className="btn btn-success w-100"
            onClick={handleContact}
          >
            {isMobile ? "📞 Call Now" : "💬 WhatsApp"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default WorkerCard;