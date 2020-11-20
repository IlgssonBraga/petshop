const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!!!');
});

app.listen(3333, () => console.log('Server running on http://localhost:3333'));  