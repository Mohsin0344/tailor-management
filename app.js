var express = require('express');
const PORT = 4000;
var app = express();
var indexRouter = require('./routes/index')

app.use(express.json());
app.use('/api', indexRouter);

app.listen(PORT, () => {
console.log('server is running');
});