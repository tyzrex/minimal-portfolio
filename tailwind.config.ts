import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Modest growth from phone to desktop; rem bounds preserve browser zoom.
      fontSize: {
        xs: ["clamp(0.75rem, 0.725rem + 0.1vw, 0.8125rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 0.975rem + 0.1vw, 1.0625rem)", { lineHeight: "1.6" }],
        lg: ["clamp(1rem, 0.9375rem + 0.2vw, 1.125rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.125rem, 1rem + 0.4vw, 1.375rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.25rem, 1.125rem + 0.4vw, 1.5rem)", { lineHeight: "1.3" }],
        "3xl": ["clamp(1.375rem, 1.125rem + 0.9vw, 2rem)", { lineHeight: "1.25" }],
        "4xl": ["clamp(1.75rem, 1.375rem + 1vw, 2.25rem)", { lineHeight: "1.2" }],
        "5xl": ["clamp(1.875rem, 1.5rem + 1.2vw, 2.75rem)", { lineHeight: "1.15" }],
        "6xl": ["clamp(2rem, 1.625rem + 1.2vw, 3rem)", { lineHeight: "1.15" }],
      },
      colors: {
        "accent-blue": "#a9daf5",
        "accent-green": "#b3deca",
        "accent-yellow": "#fbffd3",
        "accent-purple": "#abafdb",
        "accent-orange": "#f5a192",
        "accent-red": "#d5211b",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
