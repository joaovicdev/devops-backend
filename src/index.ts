import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: "João",
            age: 21
        },
        {
            name: "Jose",
            age: 21
        },
        {
            name: "Adriano",
            age: 20
        }
    ]);
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));