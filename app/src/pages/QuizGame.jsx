import { useState, useCallback, useEffect } from "react";
import quizQuestions from "../hooks/quizQuestions";
import Question from "../components/quiz/Question";
import AnswerOption from "../components/quiz/AnswerOption";
import GameWinQuiz from "../components/quiz/GameWinQuiz";
import GameOverQuiz from "../components/quiz/GameOverQuiz";
import cardBg from "../assets/img/quiz-game-empty.png";

import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' or 'incorrect'
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    const handleResize = () => {
      // Telas HD têm 1280px de largura ou mais.
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    // Limpeza do evento
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className={`w-[90%] md:max-w-[1000px] md:h-[800px] max-w-[400px] h-[450px] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center rounded-lg 
          ${
            !isDesktop ? "bg-brand-background border border-brand-yellow" : ""
          }`}
        style={isDesktop ? { backgroundImage: `url(${cardBg})` } : {}}
      >
        <div className="md:w-full w-[300px] md:max-w-[600px] max-w-[300px]">
          <Question question={currentQuestion.question} />

          <div className="mt-8 space-y-4">
            {currentQuestion.options.map((option, index) => {
              const optionLetter = Object.keys(option)[0];
              const optionText = option[optionLetter];
              let feedbackClass = "";

              if (feedback && selectedAnswer === optionLetter) {
                feedbackClass =
                  feedback === "correct"
                    ? "border-green-500 ring-2 ring-green-500"
                    : "border-red-500 ring-2 ring-red-500";
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
      className={`2xl:absolute  ${!isDesktop ? "absolute" : ""}
    top-0 left-0 w-full h-full overflow-hidden bg-brand-background 2xl:h-screen 2xl:overflow-hidden bg-fixed bg-cover flex flex-col items-center justify-center animate-fade-in`}
    >
      <Link
        to="/home"
        className="absolute top-4 left-4 md:top-10 md:left-12 text-white p-5 rounded-full bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        aria-label="Voltar para a página inicial"
      >
        <FaArrowLeft size={20} />
      </Link>

      <header className="text-center 2xl:mb-8 mb-5">
        <h1 className="2xl:text-6xl md:text-5xl text-4xl font-black text-gray-200 mb-3 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Quiz do Jacaré
        </h1>
      </header>

      <main className="flex items-center justify-center w-full">
        {renderGameContent()}
      </main>
    </div>
  );
};

export default QuizGame;
