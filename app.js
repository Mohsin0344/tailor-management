var express = require('express');
const PORT = 4000;
var app = express();
var indexRouter = require('./routes/index')

app.use(express.json());
app.use('/api', indexRouter);

app.use((req, res, next) => {
    res.status(404).send(
        {
            "message": "Route not found"
        }
    );
  });

app.listen(PORT, () => {
console.log('server is running');
});