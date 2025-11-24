import { useState } from "react";
import useResponsiveBg from "../hooks/useResponsiveBg";
import { bookImages } from "../hooks/bookImages";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const backgroundImage = useResponsiveBg();

  const totalPages = bookImages.length;

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
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

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-200 2xl:mb-4 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Livrinho da Juju
        </h1>
        {/* <h2 className="text-xl md:text-4xl font-semibold text-gray-200 [text-shadow:2px_4px_3px_#084808]">
          Explore o mundo deste incrível animal
        </h2> */}
      </header>

      <div className="bg-brand-green-dark p-4 rounded-lg shadow-lg flex flex-col items-center w-auto">
        <div className="relative 2xl:w-[600px] 2xl:h-[600px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]">
          <img
            src={bookImages[currentPage]}
            alt={`Página do livro ${currentPage + 1}`}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex items-center justify-between mt-4 w-full max-w-xs text-white">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-brand-green hover:bg-brand-green-light disabled:bg-gray-500 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            <FaArrowLeft />
          </button>
          <span className="text-lg font-semibold">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full bg-brand-green hover:bg-brand-green-light disabled:bg-gray-500 disabled:cursor-not-allowed"
            aria-label="Próxima página"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
