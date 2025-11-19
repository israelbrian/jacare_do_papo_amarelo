import useResponsiveBg from "../hooks/useResponsiveBg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Default = () => {
  const backgroundImage = useResponsiveBg();

  



  return (
    <div
      style={{ backgroundImage }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center animate-fade-in relative p-4"
    >
      <Link
        to="/home"
        className="absolute top-4 left-4 md:top-10 md:left-12 text-white p-5 rounded-full bg-brand-green hover:bg-brand-green-light transition-colors duration-300 shadow-lg"
        aria-label="Voltar para a página inicial"
      >
        <FaArrowLeft size={20} />
      </Link>

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-200 mb-4 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Exemplo title
        </h1>
        {/* <h2 className="text-xl md:text-4xl font-semibold text-gray-200 [text-shadow:2px_4px_3px_#084808]">
          Explore o mundo deste incrível animal
        </h2> */}
      </header>

      <div className="bg-brand-green-dark p-4 rounded-lg shadow-lg flex flex-col items-center w-auto">
        <div className="text-center relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <h1>default 1</h1>
          
        </div>

        <div className="flex items-center justify-between mt-4 w-full max-w-xs text-white">
          <h2>default 2</h2>
        </div>

      </div>

    </div>
  );
};

export default Default;
