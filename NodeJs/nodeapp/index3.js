import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// app.get('/', (req, res) => {
//     res.send("Hello, World!!!");
// });


// app.get('/name', (req, res) => {
//     res.send("Hello, Nishant !!");
// });



    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
    ];
    // app.get('/products', (req, res) => {
    // res.json(products);
    // });
    
    app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}); 


// app.get('/', (req, res) => {
//     res.send(req.headers.authorization)
// });


// app.get('/', (req, res) => {
//     res.send(req.query.name)
// });
