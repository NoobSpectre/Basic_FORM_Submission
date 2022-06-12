const express = require('express');
const routes = require('./routes/user');

const app = express();
const PORT = 3000;

//set static file
app.use(express.static('./public'));
//set body-parser middleware
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listtening on port https://localhost:${PORT}`);
});
