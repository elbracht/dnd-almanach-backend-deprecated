const createSpellTable = `
  CREATE TABLE IF NOT EXISTS spells (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

const seedSpells = `
  INSERT INTO spells (name)
  VALUES
    ('Ablenkung'),
    ('Alarm')
  ;
`;

export default (database) => {
  database.serialize(() => {
    database.run(createSpellTable);
    database.run(seedSpells);
  });
};
