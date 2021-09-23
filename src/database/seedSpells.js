const createSpellTable = `
  CREATE TABLE IF NOT EXISTS spells (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    school TEXT,
    level INTEGER,
    casting_time TEXT,
    range TEXT,
    components TEXT,
    duration TEXT
  );
`;

const seedSpells = `
  INSERT INTO spells (name, description, school, level, casting_time, range, components, duration)
  VALUES
    (
      'Befehl',
      '<p>Du gibst einer Kreatur in Reichweite, die du sehen kannst, einen Befehl von einem Wort. Das Ziel muss einen Weisheitsrettungswurf ablegen, sonst befolgt es den Befehl in seinem nächsten Zug. Der Zauber hat keine Auswirkungen, wenn das Ziel untot ist, wenn es deine Sprache nicht versteht oder wenn dein Befehl ihm unmittelbar schaden würde.</p><p>Es folgen einige typische Befehle und ihre Auswirkungen. Du kannst andere Befehle als die geben, die hier beschrieben sind. Wenn du dies tust, entscheidet der SL, wie sich das Ziel verhält. Wenn das Ziel deinem Befehl nicht folgen kann, endet der Zauber.</p><p><strong>Komm.</strong> Das Ziel bewegt sich auf dem kürzesten und direktesten Weg auf dich zu und beendet seinen Zug wenn es sich dir auf 1,5 Meter angenähert hat.</p><p><strong>Fallenlassen.</strong> Das Ziel lässt fallen, was es in den Händen hält und beendet dann seinen Zug.</p><p><strong>Flieh.</strong> Das Ziel verbringt seinen Zug damit, sich auf die schnellste verfügbare Weise von dir weg zu bewegen.</p><p><strong>Krieche.</strong> Das Ziel erhält den Zustand liegend und beendet seinen Zug.</p><p><strong>Stopp.</strong> Das Ziel bewegt sich nicht und führt keine Aktionen aus. Eine fliegende Kreatur bleibt in der Luft, wenn sie dazu imstande ist. Wenn sie sich bewegen muss, um in der Luft zu bleiben, dann bewegt sie sich die Mindestentfernung, die notwendig ist, um nicht abzustürzen.</p><p><strong>Auf höheren Graden.</strong> Wenn du diesen Zauber mit einem Zauberplatz des 2. Grades oder höher wirkst, dann kannst du den Zauber für jeden Zauberplatz-Grad über dem ersten auf eine zusätzliche Kreatur wirken. Die Kreaturen dürfen nicht weiter als 9 Meter voneinander entfernt sein, wenn du den Zauber auf sie wirkst.</p>',
      'Verzauberung',
      '1',
      '1 Aktion',
      '18 Meter',
      'V',
      '1 Runde'
    ), (
      'Beistand',
      '<p>Dein Zauber stärkt die Entschlossenheit und Zähigkeit deiner Verbündeten. Wähle bis zu drei Kreaturen in Reichweite. Die maximalen und aktuellen Trefferpunkte aller Ziele steigen für die Wirkungsdauer um 5.</p><p><strong>Auf höheren Graden.</strong> Wenn du diesen Zauber mit einem Zauberplatz des 3. Grades oder höher wirkst, dann steigen die Trefferpunkte des Ziels um zusätzlich 5 für jeden Zauberplatz-Grad über dem zweiten.</p>',
      'Bannzauber',
      '2',
      '1 Aktion',
      '9 Meter',
      'V, G, M (ein winziger Stoffstreifen)',
      '8 Stunden'
    )
  ;
`;

export default (database) => {
  database.serialize(() => {
    database.run(createSpellTable);
    database.run(seedSpells);
  });
};
