import { useState } from "react";
import useResponsiveBg from "../hooks/useResponsiveBg";
import { bookImages } from "../hooks/bookImages";
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
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center animate-fade-in"
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-200 mb-4 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Livrinho da Juju
        </h1>
        {/* <h2 className="text-xl md:text-4xl font-semibold text-gray-200 [text-shadow:2px_4px_3px_#084808]">
          Explore o mundo deste incrível animal
        </h2> */}
      </header>


      <div className="bg-brand-green-dark p-4 rounded-lg shadow-lg flex flex-col items-center w-auto">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
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
            className="p-2 rounded-full bg-brand-green disabled:bg-gray-500 disabled:cursor-not-allowed"
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
            className="p-2 rounded-full bg-brand-green disabled:bg-gray-500 disabled:cursor-not-allowed"
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
