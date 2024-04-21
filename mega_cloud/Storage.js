import { Storage } from 'megajs';

const storage = new Storage({
  email: process.env.MEGA_EMAIL,
  password: process.env.MEGA_PASSWORD,
  userAgent: null
});

await storage.ready