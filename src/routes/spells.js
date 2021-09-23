import express from 'express';
import database from '../database/database';

const router = express.Router();

// Get all spells
router.get('/spells', (req, res) => {
  database.all('SELECT id, name FROM spells', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    }

    if (rows.length === 0) {
      res.status(404).send('No spells found');
    }

    res.json(rows);
  });
});

// Get individual spell
router.get('/spells/:id', (req, res) => {
  const { id } = req.params;
  database.all(`SELECT id, name FROM spells WHERE id = ${id}`, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    }

    if (rows.length === 0) {
      res.status(404).send('Spell not found');
    }

    res.json(rows[0]);
  });
});

// Create a spell
router.post('/spells', (req, res) => {
});

// Update a spell
router.put('/spells', (req, res) => {
});

// Delete a spell
router.delete('/spells', (req, res) => {
});

export default router;
