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
        imageBanner:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
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
