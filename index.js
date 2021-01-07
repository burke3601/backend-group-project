const http = require('http');
const express = require('express');
const morgan = require('morgan');

const PORT = 3434;
const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const logger = morgan('dev');
app.use(logger);

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <h1>Group Project</h1>
    `);
});

server.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});