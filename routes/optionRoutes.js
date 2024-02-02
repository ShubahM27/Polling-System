const express = require('express');
const optionController = require('../controllers/optionController');

const router = express.Router({ mergeParams: true });

router.post('/create', (req, res) => {
  const { id } = req.params;
  const question = req.questions.find(question => question.id === parseInt(id));
  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  const { text } = req.body;
  const option = optionController.createOption(question, text);
  res.json({ message: 'Option added successfully', option });
});

router.delete('/:optionId/delete', (req, res) => {
  const { id, optionId } = req.params;
  const question = req.questions.find(question => question.id === parseInt(id));
  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  optionController.deleteOption(question, parseInt(optionId));
  res.json({ message: 'Option deleted successfully' });
});

module.exports = router;
