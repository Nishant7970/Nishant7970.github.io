
import express from 'express';

 const productRouter = express.Router();

 productRouter.get('/show', (req, res) => {
     res.send("Show Product APIs");
 });
  productRouter.delete('/:id', (req, res) => {
     res.send("Deleted Product with ID 1");
 });

 export default productRouter;