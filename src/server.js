import express from 'express';

const app = express();
const port = 9000;

app.use(express.static(__dirname + '/client'));

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});