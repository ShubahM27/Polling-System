const Option = require('../models/optionModel');

function createOption(question, text) {
  const newOption = new Option(question.options.length + 1, text);
  question.options.push(newOption);
  return newOption;
}

function deleteOption(question, id) {
  const index = question.options.findIndex(option => option.id === id);
  if (index !== -1) {
    question.options.splice(index, 1);
  }
}

module.exports = {
  createOption,
  deleteOption
};
