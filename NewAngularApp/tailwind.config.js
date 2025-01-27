module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-in-out',
        'wave': 'wave 1.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
};
