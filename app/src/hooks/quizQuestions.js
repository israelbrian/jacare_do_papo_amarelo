/**
 * Cria um objeto de questão.
 * @param {string} question - O texto da pergunta.
 * @param {string} optionA - O texto da opção A.
 * @param {string} optionB - O texto da opção B.
 * @param {'A' | 'B'} correctAnswer - A letra da resposta correta.
 * @returns {{question: string, options: [{A: string}, {B: string}], correctAnswer: 'A' | 'B'}}
 */
const createQuestion = (question, optionA, optionB, correctAnswer) => ({
  question,
  options: [{ A: optionA }, { B: optionB }],
  correctAnswer,
});

// Crie suas 7 questões aqui, alternando a resposta correta.
const quizQuestions = [
  createQuestion(
    "Pergunta genérica asasasas asasasa asasas asasas 1?",
    "Resposta asasasasa aasasa A (Errada)",
    "Resposta asasasa asasas asas B (Certa)",
    "B"
  ),
  createQuestion(
    "Pergunta genérica 2?",
    "Resposta A (Certa)",
    "Resposta B (Errada)",
    "A"
  ),
  createQuestion(
    "Pergunta genérica 3?",
    "Resposta A (Errada)",
    "Resposta B (Certa)",
    "B"
  ),
  createQuestion(
    "Pergunta genérica 4?",
    "Resposta A (Certa)",
    "Resposta B (Errada)",
    "A"
  ),
  createQuestion(
    "Pergunta genérica 5?",
    "Resposta A (Errada)",
    "Resposta B (Certa)",
    "B"
  ),
  createQuestion(
    "Pergunta genérica 6?",
    "Resposta A (Certa)",
    "Resposta B (Errada)",
    "A"
  ),
  createQuestion(
    "Pergunta genérica 7?",
    "Resposta A (Errada)",
    "Resposta B (Certa)",
    "B"
  ),
  // Adicione mais questões conforme necessário
];

export default quizQuestions;
