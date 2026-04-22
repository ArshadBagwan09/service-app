import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddWorker from "./pages/AddWorker";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />

      <div className="container mt-3 text-end">
        <button
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          ➕ Add Worker
        </button>
      </div>

      <Home />

      {/* 🔥 Modal */}
      {show && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Add Worker</h5>
                <button
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>

              <div className="modal-body">
                <AddWorker closeModal={() => setShow(false)} />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;