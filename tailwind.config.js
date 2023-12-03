/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ["var(--play)"],
      },
      colors: {
        bsPrimary: "#029e9d",
        bsSecondary: "#6c757d",
        bsSuccess: "#198754",
        bsInfo: "#0dcaf0",
        bsWarning: "#ffc107",
        bsDanger: "#dc3545",
        bslight: "#f8f9fa",
        bsDark: "#212529",
        bsGray: "#6c757d",
        bsGrayDark: "#343a40",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
