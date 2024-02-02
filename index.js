const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const { questions } = require('./models/questionModel');

const app = express();
app.use(bodyParser.json());

app.use('/questions', (req, res, next) => {
  req.questions = questions;
  next();
}, questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
