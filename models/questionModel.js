let questions = [];

class Question {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.options = [];
  }
}

module.exports = {
  Question,
  questions
};
