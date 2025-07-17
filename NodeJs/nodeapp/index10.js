import expreess from 'express';
const app = expreess();
const port = process.argv[2]|| 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
