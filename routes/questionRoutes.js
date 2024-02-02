const express = require('express');
const questionController = require('../controllers/questionController');
const optionRoutes = require('./optionRoutes');

const router = express.Router();

router.post('/create', (req, res) => {
  const { title } = req.body;
  const question = questionController.createQuestion(title);
  res.json({ message: 'Question created successfully', question });
});

router.delete('/:id/delete', (req, res) => {
  const { id } = req.params;
  questionController.deleteQuestion(parseInt(id));
  res.json({ message: 'Question deleted successfully' });
});

router.use('/:id/options', optionRoutes);

module.exports = router;
