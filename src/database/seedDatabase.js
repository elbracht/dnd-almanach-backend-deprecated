import database from './database';
import seedSpells from './seedSpells';

export default () => {
  seedSpells(database);
};
