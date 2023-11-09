import { Pool } from 'pg';
import { BACKEND_URL } from '$env/static/private';

const backendUrl =  BACKEND_URL;
const dbName = 'dev'; 

export const dbConn = async (): Promise<Pool> => {
  try {
    const pool = new Pool({
      connectionString: backendUrl,
      user: 'postgres', 
      host: 'localhost',
      database: dbName,
      password: 'postgres', 
      port: 5432, 
    });
console.log('sucess');
    return (pool);
  } catch (error:any) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
};

