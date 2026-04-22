const Worker = require("../models/Worker");

// ➕ Add Worker
exports.addWorker = async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get All Workers
exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Worker (extra useful)
exports.deleteWorker = async (req, res) => {
  try {
    await Worker.findByIdAndDelete(req.params.id);
    res.json({ message: "Worker deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};