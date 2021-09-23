import sqlite3 from 'sqlite3';

const database = new sqlite3.Database(':memory:');

export default database;
