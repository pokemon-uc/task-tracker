const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {

    tasks.push(req.body.task);

    res.json({
        message: 'Task Added'
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});