// src/pages/Welcome.jsx
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaArrowRight } from "react-icons/fa"; // Importando ícones
import { useNavigate } from "react-router-dom";
import videoWelcomeMobile from "../assets/videos/video-welcome-mobile-1.mp4";
import videoWelcomeDesktop from "../assets/videos/video-welcome-1.mp4";

const Welcome = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? videoWelcomeMobile : videoWelcomeDesktop
  );

  const handleVideoEnd = () => {
    navigate("/home");
  };

  const handlePlayWithSound = () => {
    setUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      // A promise play() pode ser rejeitada se o navegador ainda assim bloquear.
      // O .catch evita um erro não tratado no console.
      videoRef.current.play().catch((error) => {
        console.error("Erro ao tentar reproduzir o vídeo com som:", error);
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(
        window.innerWidth < 768 ? videoWelcomeMobile : videoWelcomeDesktop
      );
    };

    window.addEventListener("resize", handleResize);

    // Limpeza do evento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
      {/* Overlay de boas-vindas com transição */}
      <div
        className={`absolute z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 transition-opacity duration-1000 ${
          userInteracted ? "opacity-0" : "opacity-100"
        } bg-black bg-opacity-30`}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-5 shadow-lg">
          Bem-vindo!
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-200 mb-5 md:mb-8 shadow-md">
          Uma jornada pelo mundo do Jacaré-de-Papo-Amarelo
        </h2>
        <h3 className="font-bold text-xl md:text-3xl text-gray-200 mb-8 p-2 shadow-md">
          <span className="border-b">Caiman</span> <span className="border-b">latirostris</span>
        </h3>
        <button
          onClick={handlePlayWithSound}
          className="group flex items-center gap-4 px-8 py-4 text-xl md:text-2xl font-semibold border-2 border-brand-yellow bg-brand-yellow text-brand-green-dark rounded-lg hover:bg-transparent hover:text-brand-yellow transition-all duration-300 shadow-lg"
        >
          {/* <FaVolumeUp /> */}
          <span>Iniciar a jornada</span>
          <FaArrowRight className="group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay={userInteracted} // Só inicia o autoplay após a interação
        muted={!userInteracted} // Começa mudo, e o som é ativado no clique
        onEnded={handleVideoEnd}
        // O vídeo começa um pouco escuro e ganha vida após a interação
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          userInteracted ? "opacity-100" : "opacity-40"
        }`}
        playsInline // Importante para autoplay em alguns navegadores mobile
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Welcome;
