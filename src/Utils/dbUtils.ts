import { dbConn } from "../dbConn";


export const testDatabaseConnection = async () => {
  try {
    const pool = await dbConn();

  
    const result = await pool.query('SELECT version()');
    
    console.log('Connected to the database successfully');
    console.log('Database version:', result.rows[0].version);

    pool.end();
  } catch (error:any) {
    console.error('Error testing database connection:', error.message);
  }
};