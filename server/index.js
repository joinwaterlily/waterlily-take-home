const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid');

const db = new sqlite3.Database('./funding-sources.db');

db.serialize(() => {
  // FundingSources are investments that people can use to fund their long-term care expenses
  // Understanding exactly what each funding source represents is not necessary for this exercise
  db.run(`
    CREATE TABLE FundingSources (
      id TEXT PRIMARY KEY,
      type TEXT,
      name TEXT,
      cost REAL,
      projectedLtcPayout REAL,
      projectedTotalPayout REAL,
      projectedROI REAL
    )
  `);

  const insertStmt = db.prepare("INSERT INTO FundingSources VALUES (?, ?, ?, ?, ?, ?, ?)");

  insertStmt.run(uuidv4(), 'Policy', 'Traditional LTC', 54200.09, 102000, 102000, 0.88);
  insertStmt.run(uuidv4(), 'Policy', 'Hybrid Life Insurance', 120000, 240000, 250000, 1.08);
  insertStmt.run(uuidv4(), 'Self-Funding', 'One-time Contribution', 10000, 30000, 30000, 2);
  insertStmt.run(uuidv4(), 'Annuity', 'Deferred Fixed', 42500, 75000, 105000, 1.47);

  insertStmt.finalize();
});

app.get('/funding-sources', (req, res) => {
  db.all("SELECT * FROM FundingSources", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// TODO step 2 - Add new endpoints for adding, editing, deleting funding sources

app.listen(port, () => {
  console.log(`Server running at http://localhost:${ port }`);
});