const { Question, questions } = require('../models/questionModel');

function createQuestion(title) {
  const newQuestion = new Question(questions.length + 1, title);
  questions.push(newQuestion);
  return newQuestion;
}

function deleteQuestion(id) {
  const index = questions.findIndex(question => question.id === id);
  if (index !== -1) {
    questions.splice(index, 1);
  }
}

module.exports = {
  createQuestion,
  deleteQuestion
};
