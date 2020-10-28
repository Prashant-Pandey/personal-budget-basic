const express = require('express');
require("dotenv").config();
const cors = require("cors")
const service = require("./service");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.use('/', express.static('./public'))

app.get('/budget', async (req, res) => {
    res.json(await service.getBudgets());
});

app.post('/budget', async (req, res) => {
    const result = await service.createBudget(req.body.title, parseInt(req.body.budget), req.body.color);
    if(result.error){
        res.status(500);
    }
    res.json(result);
});


app.listen(port, () => {
    console.log(`Yay! server started at port ${port}`);
})