import http from 'http';

const server=http.createServer((req,res)=> {
    res.end("Good Morning");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});