import { useState, useEffect } from 'react';
import bgMobile from '../assets/img/bg-mobile.jpg';
import bgDesktop from '../assets/img/bg-desktop.jpg';

const useResponsiveBg = (breakpoint = 768) => {
  const [bgImage, setBgImage] = useState(`url(${bgMobile})`);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setBgImage(`url(${bgDesktop})`);
      } else {
        setBgImage(`url(${bgMobile})`);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Define a imagem inicial com base no tamanho da tela

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return bgImage;
};

export default useResponsiveBg;