import pg from 'pg';
// connection to the database pool
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}
// creates a pool obhject for the agrument of the constructor
export const pool = new pg.Pool(config);