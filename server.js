const express = require('express');
const app = express();
const port = 3000;
const budget = {
    data: [{
        title: 'Eat out',
        budget: 30
    }, {
        title: 'Rent',
        budget: 350
    }, {
        title: 'Groceries',
        budget: 90
    }]
}

app.use('/', express.static('./public'))
app.get('/hello', (req, res) => {
    res.send('world');
});
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Yay! server started at port ${port}`);
})