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

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        logoColor: "#D6927B",
        logoColorLight: "#E8A58F",
      },
    },
  },
  plugins: [],
};
export default config;
