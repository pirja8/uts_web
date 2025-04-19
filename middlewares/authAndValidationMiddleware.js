const apiKey = '12345';

// Middleware Auth
const checkAuth = (req, res, next) => {
  if (req.headers['x-api-key'] === apiKey) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Middleware Validasi Input Minuman
const validateMinumanSehat = (req, res, next) => {
  const { nama, harga } = req.body;

  if (!nama || nama.trim() === '') {
    return res.status(400).json({ error: 'Nama minuman sehat tidak boleh kosong' });
  }

  if (!harga || harga <= 0) {
    return res.status(400).json({ error: 'Harga harus lebih dari 0' });
  }

  next();
};

module.exports = { checkAuth, validateMinumanSehat };
