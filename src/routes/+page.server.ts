import * as CryptoJS from 'crypto-js';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { SECRET_KEY } from '$env/static/private';

config();

const secretKey = SECRET_KEY;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    if (typeof password === 'string') {
      const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();

      const userId = 'sunique ID here';

      const token = jwt.sign({ userId }, secretKey);


      return { success: true, token, username };
    } else {
      console.log('Not a string');
      return { success: false, message: 'Invalid password' };
    }
  },
};
