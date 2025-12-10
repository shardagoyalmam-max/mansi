module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mehrun: '#800020',
        gold: '#FFD700',
        cream: '#FFF8E7',
        'glass-dark': 'rgba(28, 28, 28, 0.8)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mehrun': 'linear-gradient(135deg, #800020 0%, #A00028 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(28, 28, 28, 0.7) 0%, rgba(28, 28, 28, 0.5) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'mehrun': '0 10px 30px rgba(128, 0, 32, 0.3)',
      },
      backdropFilter: {
        'glass': 'blur(4px)',
      },
    },
  },
  plugins: [],
};
