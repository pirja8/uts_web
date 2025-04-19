const db = require('../config/db');

// Tambah Minuman Sehat
const addMinumanSehat = (req, res) => {
  const { nama, harga } = req.body;
  console.log("Data POST:", req.body);

  db.query(
    "INSERT INTO minuman (nama, harga) VALUES (?, ?)",
    [nama, harga],
    (err) => {
      if (err) {
        console.error("❌ Gagal insert:", err.message);
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "✅ Minuman Sehat berhasil ditambahkan" });
    }
  );
};

// Ambil Semua Minuman Sehat
const getMinumanSehat = (req, res) => {
  console.log("GET semua minuman");
  db.query("SELECT id, nama, harga FROM minuman", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

// Hapus Minuman Sehat
const deleteMinumanSehat = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM minuman WHERE id = ?", [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Minuman Sehat berhasil dihapus" });
  });
};

module.exports = {
  addMinumanSehat,
  getMinumanSehat,
  deleteMinumanSehat,
};
