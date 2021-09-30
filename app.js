const express = require('express')
const app = express()

const port = process.env.PORT || 8080

let lastId = 1
const db = {}

app.use(express.json());
app.post('/product', (req, res) => {
    const product = req.body

    let id = lastId++
    db[id] = product

    let responseJson = JSON.stringify({id: id});
    res.setHeader('Content-Type', 'application/json');
    res.end(responseJson)
});

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let json = JSON.stringify(db[id]);

    if ( typeof json !== 'undefined' && json ) {
        res.setHeader('Content-Type', 'application/json');
        res.end(json);
    } else {
        res.end(JSON.stringify({}))
    }
});

app.listen(port, () => {
    console.log(`Product REST API application listening at http://localhost:${port}`)
});