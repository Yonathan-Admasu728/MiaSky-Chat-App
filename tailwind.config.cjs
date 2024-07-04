const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {colors: { primary: '#ff0000', secondary: '#00ff00',  }},  
  },

  plugins: [require("daisyui")]
};

module.exports = config;