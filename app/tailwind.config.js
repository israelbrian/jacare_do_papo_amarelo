// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green-dark": "#084808", // Exemplo de verde escuro
        "brand-green-light": "#86A873", // Exemplo de verde claro
        "brand-green": "#6b8e23", // Exemplo de verde claro
        "brand-yellow": "#F2E3A0", // Exemplo de amarelo
        "brand-yellow-background": '#EEEBD8',
        "brand-background": "#2B3D41", // Tom de fundo baseado na imagem
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
