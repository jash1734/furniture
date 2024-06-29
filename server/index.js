// index.js
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');

const app = express();

app.use(express.json({ limit: '100mb' }));
connectDatabase();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Import routes after exporting wss to ensure they have access to it
const productRoute = require('./route/product');

// const questionRoute = require('./route/question');
// const chatRoute = require('./route/chat');

app.use('/api/v1/product', productRoute);
// app.use('/api/v1/question', questionRoute);
// app.use('/api/v1/chat', chatRoute);

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
