const express = require('express');
const { query } = require('../config/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resultado = await query('SELECT * FROM pglogin.usuario');
    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

router.post('/', async (req, res) => {
  const { nomb_pri, nomb_seg, apel_mat, apel_pat, dni_usu, numero_usu } = req.body;
  try {
    const resultado = await query(
      'INSERT INTO pglogin.usuario (nomb_pri, nomb_seg, apel_mat, apel_pat, dni_usu, numero_usu) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nomb_pri, nomb_seg, apel_mat, apel_pat, dni_usu, numero_usu]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).json({ error: 'Error al agregar usuario' });
  }
});

module.exports = router;
