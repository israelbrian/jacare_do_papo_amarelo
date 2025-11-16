// src/pages/Home.jsx

const Home = () => {
  const menuItems = [
    { title: 'Meu Livrinho' },
    { title: 'Jogo da Memória' },
    { title: 'Saiba Mais' },
    { title: 'Quiz' },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-yellow mb-4">
          Jacaré-de-Papo-Amarelo
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300">
          Explore o mundo deste incrível animal
        </h2>
      </header>

      <main className="w-full max-w-4xl">
        {/* Grid para os containers, responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-brand-green-dark hover:bg-brand-green-light transition-colors duration-300 cursor-pointer rounded-lg p-8 flex items-center justify-center text-center"
            >
              <span className="text-2xl font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
