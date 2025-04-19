const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const minumanSehatRoutes = require('./routes/minumanSehatRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));

// Middleware Logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Rute utama
app.use('/minuman-sehat', minumanSehatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
