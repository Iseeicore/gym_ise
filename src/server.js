const express = require('express');
const { query } = require('./config/db');
const usuariosRoutes = require('./api/usuario');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor backend funcionando!');
});

app.use('/api/usuario', usuariosRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
