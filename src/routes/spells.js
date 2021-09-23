import express from 'express';

const router = express.Router();

// Get all spells
router.get('/spells', (req, res) => {
  res.json({
    1: { name: 'Ablenkung' },
    2: { name: 'Alarm' },
  });
});

// Get individual spell
router.get('/spells/:id', (req, res) => {
  const { id } = req.params;
  switch (id) {
    case '1':
      res.json({ name: 'Ablenkung' });
      break;
    case '2':
      res.json({ name: 'Alarm' });
      break;
    default:
      res.status(404).send('Spell not found');
      break;
  }
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
