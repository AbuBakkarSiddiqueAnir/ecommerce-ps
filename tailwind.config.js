/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1.938rem",
      },
      screens: {
        sm: "275px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
    borderRadius: {
      xs: "3px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "30.5px",
      full: "100%",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter Variable", "sans-serif"],
      },
      colors: {
        green: {
          main: "#03484D",
          heavy: "#0E3B3E",
        },
        blue: {
          main: "",
        },
        gray: {
          text: "#ABA3A3",
        },

        teal: {
          medium: "#14B1F0",
          light: "#00CAD7",
        },
      },
      fontSize: {
        "h-huge": [
          "clamp(2rem, 3.5vw + 1rem, 3.5rem)",
          {
            lineHeight: "120%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],

        "h-xl": [
          "clamp(1.3rem, 2vw + 1rem, 2.4rem)",
          {
            lineHeight: "4.11rem",
            fontWeight: "400",
            letterSpacing: "0.095rem",
          },
        ],

        "h-lg": [
          "clamp(1rem, 1.5vw + 1rem, 1.4rem)",
          {
            lineHeight: "100%",
            fontWeight: "500",
            letterSpacing: "0.06rem",
          },
        ],

        "h-sm": [
          "clamp(1.25rem, 2vw + 0.5rem, 1.75rem)",
          {
            lineHeight: "120%",
            fontWeight: "400",
            letterSpacing: "0.019rem",
          },
        ],

        "b-1": [
          "clamp(1rem, 0.5vw + 0.8rem, 1.25rem)",
          { lineHeight: "100%", fontWeight: "500", letterSpacing: "0.04rem" },
        ],
        "b-2": [
          "clamp(0.95rem, 0.75vw + 1rem, 0.98rem)",
          { lineHeight: "140%", fontWeight: "500", letterSpacing: "0.02rem" },
        ],
        "b-3": [
          "clamp(0.8rem, 0.7vw + 0.7rem, 0.8rem)",
          { lineHeight: "100%", fontWeight: "400" },
        ],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      spacing: {
        xs: "16px",
        sm: "24px",
        md: "2.5rem",
        lg: "2.94rem",
        xl: "128px",
      },
      borderRadius: {
        md: "0.31rem",
      },
      boxShadow: {
        "nav-bar": " 0px 4px 9px 0px #00000063",
      },
      backgroundColor: {
        "b-1": "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      },
    },
  },
  plugins: [],
};
