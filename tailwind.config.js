module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(215 25% 27%)",
                input: "hsl(217 33% 17%)",
                ring: "hsl(187 92% 43%)",
                background: "hsl(222 47% 11%)",
                foreground: "hsl(0 0% 100%)",
                primary: {
                    DEFAULT: "hsl(187 92% 43%)",
                    foreground: "hsl(0 0% 100%)",
                },
                secondary: {
                    DEFAULT: "hsl(215 25% 27%)",
                    foreground: "hsl(214 32% 91%)",
                },
                destructive: {
                    DEFAULT: "hsl(0 84% 60%)",
                    foreground: "hsl(0 0% 100%)",
                },
                muted: {
                    DEFAULT: "hsl(217 33% 17%)",
                    foreground: "hsl(215 20% 65%)",
                },
                accent: {
                    DEFAULT: "hsl(187 92% 56%)",
                    foreground: "hsl(0 0% 100%)",
                },
                popover: {
                    DEFAULT: "hsl(217 33% 17%)",
                    foreground: "hsl(0 0% 100%)",
                },
                card: {
                    DEFAULT: "rgba(30, 41, 59, 0.5)",
                    foreground: "hsl(0 0% 100%)",
                },
                cyan: "hsl(187 92% 43%)",
                purple: "hsl(271 81% 56%)",
                red: "hsl(0 84% 60%)",
                success: "hsl(158 64% 52%)",
                warning: "hsl(38 92% 50%)",
                error: "hsl(0 84% 60%)",
                info: "hsl(187 92% 43%)",
                "text-primary": "hsl(0 0% 100%)",
                "text-secondary": "hsl(214 32% 91%)",
                "text-tertiary": "hsl(215 20% 65%)",
                "border-hover": "hsl(187 92% 56%)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            fontSize: {
                "4xl": "3rem",
                "5xl": "4rem",
            },
            spacing: {
                "4": "1rem",
                "8": "2rem",
                "12": "3rem",
                "16": "4rem",
                "20": "5rem",
                "24": "6rem",
                "32": "8rem",
                "48": "12rem",
                "64": "16rem",
                "96": "24rem",
            },
            borderRadius: {
                lg: "0.5rem",
                md: "0.375rem",
                sm: "0.25rem",
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(90deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)",
                "gradient-accent": "linear-gradient(45deg, #06b6d4 0%, #a855f7 100%)",
                "gradient-alert": "linear-gradient(90deg, #a855f7 0%, #ef4444 100%)",
            },
        },
    },
    plugins: [],
}
