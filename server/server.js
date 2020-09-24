const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const exampleRouter = require('./routes/exampleRouter')



/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));




/** ---------- Set up the Routes ---------- **/
app.use('/example', exampleRouter);





// Serve static files
app.use(express.static('build'));

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});