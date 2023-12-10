const express = require('express');

const app = express();

const PORT = 4000;

const indexRouter = require('./src/routes/index');
const serverConfig = require('./src/config/serverConfig');

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server chilling on ${4000} port`);
});
