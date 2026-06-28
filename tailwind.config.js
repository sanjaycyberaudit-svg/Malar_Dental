/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "surface-dark": "hsl(var(--surface-dark))",
        "surface-light": "hsl(var(--surface-light))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
    },
  },
  plugins: [],
};
