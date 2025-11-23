import { useState, useCallback } from "react";
import useResponsiveBg from "../hooks/useResponsiveBg";
import quizQuestions from "../hooks/quizQuestions";
import Question from "../components/quiz/Question";
import AnswerOption from "../components/quiz/AnswerOption";
import GameWinQuiz from "../components/quiz/GameWinQuiz";
import GameOverQuiz from "../components/quiz/GameOverQuiz";
import cardBg from "../assets/img/card-quiz-game-empty.png";

const QuizGame = () => {
  const bgImage = useResponsiveBg();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' or 'incorrect'
  const [isGameFinished, setIsGameFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setFeedback(null); // Reseta o feedback ao selecionar uma nova resposta
  };

  const validateQuestion = () => {
    if (selectedAnswer === null) {
      alert("Por favor, selecione uma resposta.");
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }

    // Avança para a próxima questão ou finaliza o jogo após um tempo
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
        setFeedback(null);
      } else {
        setIsGameFinished(true);
      }
    }, 1500); // Espera 1.5s para o usuário ver o feedback
  };

  const handleRetry = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFeedback(null);
    setIsGameFinished(false);
  }, []);

  const renderGameContent = () => {
    if (isGameFinished) {
      if (score >= 4) {
        return <GameWinQuiz score={score} onRetry={handleRetry} />;
      } else {
        return <GameOverQuiz score={score} onRetry={handleRetry} />;
      }
    }

    return (
      <div
        className="w-[90%] max-w-[800px] h-[600px] bg-contain bg-no-repeat bg-center p-8 flex flex-col items-center justify-start"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        <div className="w-full max-w-[600px] mt-20">
          <Question question={currentQuestion.question} />

          <div className="mt-8 space-y-4">
            {currentQuestion.options.map((option, index) => {
              const optionLetter = Object.keys(option)[0];
              const optionText = option[optionLetter];
              let feedbackClass = "";

              if (feedback && selectedAnswer === optionLetter) {
                feedbackClass =
                  feedback === "correct"
                    ? "border-green-500"
                    : "border-red-500";
              }

              return (
                <AnswerOption
                  key={index}
                  answer={optionText}
                  isSelected={selectedAnswer === optionLetter}
                  onSelect={() => handleAnswerSelect(optionLetter)}
                  feedbackClass={feedbackClass}
                />
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={validateQuestion}
              disabled={feedback !== null}
              className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-brand-green-light transition-colors duration-300 disabled:bg-gray-400"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: bgImage }}
    >
      <header className="w-full text-center py-4">
        <h1 className="text-4xl font-bold text-white [text-shadow:2px_2px_4px_#000]">
          Quiz do Jacaré
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center w-full">
        {renderGameContent()}
      </main>
    </div>
  );
};

export default QuizGame;
