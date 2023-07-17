import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const server = express();

import { access } from './middlewares/access.middleware';
import routerConfig from './routes';
server.use('/api', access, routerConfig)

/* Connect mysql */
// import { dbConnect } from './mysql.config';
import { dbConnect } from './mysql.config';
dbConnect();

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})