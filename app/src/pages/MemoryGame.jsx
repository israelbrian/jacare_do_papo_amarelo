import { useState, useEffect, useCallback } from "react";
import useResponsiveBg from "../hooks/useResponsiveBg";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import initialCards from "../hooks/memoryGameImages";
import Timer from "../components/common/Timer";
import Card from "../components/common/Card";
import GameOverModal from "../components/common/GameOverModal";
import Lives from "../components/common/Lives";
import GameWinModal from "../components/common/GameWinModal";

const shuffleCards = () => {
  const duplicatedCards = [...initialCards, ...initialCards];
  return duplicatedCards
    .map((card, index) => ({ ...card, uniqueId: index }))
    .sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const backgroundImage = useResponsiveBg();
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [lives, setLives] = useState(6);
  const [isChecking, setIsChecking] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [retryCount, setRetryCount] = useState(0);
  const [justMatchedType, setJustMatchedType] = useState(null);

  const location = useLocation();

  // Backdoor para testes rápidos via URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const testMode = queryParams.get("test");

    if (testMode === "win") {
      setIsGameWon(true);
    } else if (testMode === "lose") {
      setIsGameOver(true);
    }
  }, [location]);

  const resetGame = useCallback(() => {
    const nextRetryCount = retryCount + 1;
    setRetryCount(nextRetryCount);

    // Embaralha apenas na 5ª tentativa
    if (nextRetryCount % 5 === 0) {
      setCards(shuffleCards());
    }

    setFlippedCards([]);
    setMatchedPairs([]);
    setLives(6);
    setIsGameOver(false);
    setIsGameWon(false);
    setTimeLeft(120);
    setIsChecking(false);
  }, [retryCount]);

  useEffect(() => {
    if (timeLeft === 0 || lives === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft, lives]);

  useEffect(() => {
    // 8 é o número de pares únicos
    if (matchedPairs.length === 8) {
      setIsGameWon(true);
    }
  }, [matchedPairs]);

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver]);

  const checkForMatch = useCallback(() => {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.type === secondCard.type) {
      setMatchedPairs((prev) => [...prev, firstCard.type]);
      setJustMatchedType(firstCard.type);
    } else {
      setLives((prev) => prev - 1);
    }
    setTimeout(() => {
      setFlippedCards([]);
      setIsChecking(false);
      setJustMatchedType(null); // Limpa o efeito de acerto
    }, 1000);
  }, [flippedCards]);

  useEffect(() => {
    if (flippedCards.length === 2 && !isChecking) {
      setIsChecking(true);
      checkForMatch();
    }
  }, [flippedCards, checkForMatch]);

  const handleCardClick = (clickedCard) => {
    if (
      isChecking ||
      flippedCards.length === 2 ||
      flippedCards.some((c) => c.uniqueId === clickedCard.uniqueId) ||
      matchedPairs.includes(clickedCard.type)
    ) {
      return;
    }
    setFlippedCards((prev) => [...prev, clickedCard]);
  };

  return (
    <div
      style={{ backgroundImage }}
      className="absolute top-0 left-0 w-full h-full overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center animate-fade-in p-4"
    >
      <Link
        to="/home"
        className="absolute top-4 left-4 md:top-10 md:left-12 text-white p-5 rounded-full bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        aria-label="Voltar para a página inicial"
      >
        <FaArrowLeft size={20} />
      </Link>

      {isGameOver && <GameOverModal onRetry={resetGame} />}
      {isGameWon && <GameWinModal onRetry={resetGame} />}

      <header className="text-center 2xl:mb-8 mb-5">
        <h1 className="2xl:text-6xl md:text-5xl text-4xl font-black text-gray-200 mb-4 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Jogo da Memória
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold text-gray-200 [text-shadow:2px_4px_3px_#084808]">
          Teste a sua memória!
        </h2>
      </header>

      <div className="bg-brand-green-dark p-4 rounded-lg shadow-lg flex flex-col items-center w-auto">
        <div className="grid grid-cols-4 grid-rows-4 gap-2 md:gap-4 w-[80vw] h-[80vw] 2xl:w-[500px] 2xl:h-[500px] md:w-[400px] md:h-[400px]">
          {cards.map((card) => (
            <Card
              key={card.uniqueId}
              card={card}
              isFlipped={
                flippedCards.some((c) => c.uniqueId === card.uniqueId) ||
                matchedPairs.includes(card.type)
              }
              isMismatched={
                flippedCards.length === 2 &&
                !matchedPairs.includes(card.type) &&
                flippedCards.some((c) => c.uniqueId === card.uniqueId)
              }
              isJustMatched={
                justMatchedType === card.type &&
                !matchedPairs.includes(card.type)
              }
              isMatched={matchedPairs.includes(card.type)}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 w-full max-w-md text-white px-2">
          <Lives count={lives} />
          <Timer timeLeft={timeLeft} />
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
