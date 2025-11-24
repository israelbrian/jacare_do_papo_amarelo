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
    "Qual característica física é a razão do nome popular do jacaré-do-papo-amarelo e qual é essa cor?",
    "A ponta do rabo, que fica com a cor azul-esverdeada.",
    "A garganta e o papo, que ficam com a cor amarela, principalmente em jacarés mais jovens.",
    "B"
  ),
  createQuestion(
    "Em que ambiente o jacaré-do-papo-amarelo gosta de viver e construir seu lar?",
    "Em ambientes de água doce, como rios, pântanos e lagoas da América do Sul.",
    "No fundo do mar, onde a água é salgada e a comida é fácil de encontrar.",
    "A"
  ),
  createQuestion(
    "Qual é a importância do jacaré-do-papo-amarelo para a saúde da natureza?",
    "Ele é um predador que ajuda a manter o equilíbrio do ecossistema, controlando a população de outros animais.",
    "Ele só come plantas aquáticas e não tem um papel importante na cadeia alimentar.",
    "A"
  ),
  createQuestion(
    "O que o jacaré-do-papo-amarelo come, já que ele é um animal carnívoro?",
    "Somente frutas, sementes e algas do rio.",
    "Peixes, caramujos, aves aquáticas e pequenos mamíferos.",
    "B"
  ),
  createQuestion(
    "Como a mamãe jacaré cuida do seu ninho e dos ovos antes de os filhotes nascerem?",
    "Ela constrói um ninho grande com folhas e barro e fica vigiando ele de perto para proteger os ovos.",
    "Ela enterra os ovos na areia e vai embora, sem nunca mais voltar para cuidar dos filhotes.",
    "A"
  ),
  createQuestion(
    "Quais são as maiores ameaças que colocam em risco a vida do jacaré-do-papo-amarelo?",
    "A falta de peixes nos rios e o frio muito intenso.",
    "A poluição da água onde ele vive e a caça ilegal para usar sua pele e carne.",
    "B"
  ),
  createQuestion(
    "O que podemos fazer para ajudar a proteger o jacaré-do-papo-amarelo e o meio ambiente dele?",
    "Levar um filhote de jacaré para casa para cuidar dele como animal de estimação.",
    "Não jogar lixo nos rios, economizar água e denunciar quem estiver caçando animais ilegalmente.",
    "B"
  ),
  // Adicione mais questões conforme necessário
];

export default quizQuestions;
