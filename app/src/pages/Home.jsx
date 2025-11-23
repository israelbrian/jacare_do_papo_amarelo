import useResponsiveBg from "../hooks/useResponsiveBg";
import { Link } from "react-router-dom";

// src/pages/Home.jsx

const Home = () => {
  const menuItems = [
    { title: "Meu Livrinho", path: "/book" },
    { title: "Jogo da Memória", path: "/memory-game" },
    { title: "Saiba Mais" },
    { title: "Quiz", path: "/quiz-game" },
  ];

  const backgroundImage = useResponsiveBg();

  return (
    <div
      style={{ backgroundImage }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4 animate-fade-in"
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-200 mb-4 -tracking-tight [text-shadow:4px_3px_3px_#084808]">
          Jacaré-do-Papo-Amarelo
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold text-gray-200 [text-shadow:2px_4px_3px_#084808]">
          Explore o mundo deste incrível animal
        </h2>
      </header>

      <main className="w-full max-w-4xl">
        {/* Grid para os containers, responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-gray-300">
          {menuItems.map((item, index) => {
            const content = (
              <div className="bg-brand-green-dark hover:bg-brand-green-light transition-colors duration-300 cursor-pointer rounded-lg p-8 flex items-center justify-center text-center h-full">
                <span className="text-2xl font-semibold">{item.title}</span>
              </div>
            );

            if (item.path) {
              return (
                <Link to={item.path} key={index}>
                  {content}
                </Link>
              );
            }
            return <div key={index}>{content}</div>;
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
