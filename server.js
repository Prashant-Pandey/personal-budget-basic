const express = require('express');
const budget = require("./budget-data.json")
const app = express();
const port = 3000;


app.use('/', express.static('./public'))
app.get('/hello', (req, res) => {
    res.send('world');
});
app.get('/budget', (req, res) => {
    res.json(budget);
});
app.get('/get_error', (req, res) => {
    res.status(400);
    res.send({ error: 'file not found' })
})

app.listen(port, () => {
    console.log(`Yay! server started at port ${port}`);
})