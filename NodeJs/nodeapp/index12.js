import express from 'express';
import userRouter from './userRoute.js';
import productRouter from './productRoute.js';

 const app = express();
 app.listen(3000, () => {
     console.log("Server is running on port 3000");
 });


 app.use('/api/users', userRouter);
 app.use('/api/products', productRouter);