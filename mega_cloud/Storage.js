import { Storage } from 'megajs';
require('dotenv').config();

const storage = new Storage({
    email: process.env.MEGA_EMAIL,
    password: process.env.MEGA_PASSWORD,
    userAgent: 'mega/1.1.7'
}, error => {
    if (error) {
        console.error(error);
    }
})

// Will resolve once the user is logged in
// or reject if some error happens
await storage.ready