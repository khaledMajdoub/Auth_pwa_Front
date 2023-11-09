import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { SECRET_KEY } from '$env/static/private';

const saltRounds = 10;
config();

const secretKey = SECRET_KEY

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get('username'); 
    const password = formData.get('password');
    
    if (typeof password === 'string') {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log('Error hashing the password:', err);
          return { success: false, message: 'Error hashing the password' };
        }

        const token = jwt.sign({ username, password, hash }, secretKey);



        return { success: true, token, username };
      });
    } else {
      console.log('Not a string');
      return { success: false, message: 'Invalid password' };
    }
  },
};
