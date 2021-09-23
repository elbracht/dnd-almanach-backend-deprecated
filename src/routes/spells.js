import express from 'express';
import database from '../database/database';

const router = express.Router();

// Get all spells
router.get('/spells', (req, res) => {
  database.all('SELECT * FROM spells', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('No spells found');
      return;
    }

    res.json(rows);
  });
});

// Get individual spell
router.get('/spells/:id', (req, res) => {
  const { id } = req.params;

  database.all(`SELECT * FROM spells WHERE id = ${id}`, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('Spell not found');
      return;
    }

    res.json(rows[0]);
  });
});

// Create a spell
router.post('/spells', (req, res) => {
  if (!req.body.name) {
    res.status(500).send('A name is required to create the spell');
    return;
  }

  const stmt = database.prepare('INSERT INTO spells (name, description, school, level, casting_time, range, components, duration) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
  stmt.run(
    req.body.name,
    req.body.description || null,
    req.body.school || null,
    req.body.level || null,
    req.body.casting_time || null,
    req.body.range || null,
    req.body.components || null,
    req.body.duration || null,
  );
  stmt.finalize();

  res.send(`Spell '${req.body.name}' was created`);
});

// Update a spell
router.put('/spells/:id', (req, res) => {
  const { id } = req.params;

  const stmt = database.prepare('UPDATE spells SET name = COALESCE(?, name), description = COALESCE(?, description), school = COALESCE(?, school), level = COALESCE(?, level), casting_time = COALESCE(?, casting_time), range = COALESCE(?, range), components = COALESCE(?, components), duration = COALESCE(?, duration) WHERE id = ?');
  stmt.run(
    req.body.name || null,
    req.body.description || null,
    req.body.school || null,
    req.body.level || null,
    req.body.casting_time || null,
    req.body.range || null,
    req.body.components || null,
    req.body.duration || null,
    id,
  );
  stmt.finalize();

  res.send('Spell was updated');
});

// Delete a spell
router.delete('/spells', (req, res) => {
});

export default router;
