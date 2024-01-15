import { px } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          backgroundColor: {
            light: "#000", // Substitua pela cor de fundo desejada
          },
          textColor: {
            light: "#FFF", // Substitua pela cor de texto desejada
          },
        },
      },
      boxShadow: {
        card: "0px 0px 60px -10px rgba(0 0 0 / 0.05)",
        cardDefault: "0px 0px 200px -50px rgba(0 0 0 0 / 0.001)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        logoColor: "#D6927B",
        logoColorLight: "#E8A58F",
      },
      screens: {
        "4xl": "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
