// src/pages/Welcome.jsx
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoWelcomeMobile from '../assets/videos/video-welcome-mobile.mp4';
import videoWelcomeDesktop from '../assets/videos/video-welcome.mp4';

const Welcome = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? videoWelcomeMobile : videoWelcomeDesktop);

  const handleVideoEnd = () => {
    navigate('/home');
  };

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 768 ? videoWelcomeMobile : videoWelcomeDesktop);
    };

    window.addEventListener('resize', handleResize);

    // Limpeza do evento
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        // muted // Autoplay geralmente requer que o vídeo esteja mudo
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Welcome;
