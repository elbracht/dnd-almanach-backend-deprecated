import express from 'express';
import seedDatabase from './database/seedDatabase';
import spells from './routes/spells';

seedDatabase();

const app = express();
const port = process.env.PORT || 3000;

app.use(spells);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
