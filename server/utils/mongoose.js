import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Mongoose ERROR: ', err);
  });

export default mongoose;
