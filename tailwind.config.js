/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          // Customize the breakpoint for the 'lg' screen
          sm: "100%",
          md: "640px",
          lg: "768px",
          xl: "1024px",
          "2xl": "1280px",
        },
      },

      colors: {
        primary: "var(--primary)",
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        monestral: "var(--monestral)",
        background: "var(--background)",

        borderColor: "var(--borderColor)",
        input: "var(--input)",
        brand: "var(--brand)",

        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",

        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",

        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",

        "danger-600": "var(--danger-600)",
        "danger-700": "var(--danger-700)",
        "danger-800": "var(--danger-800)",

        danger: "var(--danger)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        menuPrimary: "var(--bg-menu-primary)",
        menuSecondary: "var(--bg-menu-secondary)",
      },
      fontFamily: {
        zen: ["var(--ff-zen)"],
      },
    },
  },
  plugins: [],
};
