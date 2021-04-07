import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import exerciseRoutes from './routes/exercise.js';
import userRoutes from './routes/users.js';

const app = express();

dotenv.config();
 
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
app.use(express.json());
app.use('/exercise', exerciseRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);