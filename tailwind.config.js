import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                jetbrains: ['"Geist Mono"', "monospace"],
                mono: ['"Geist Mono"', "monospace"],
                display: ["Geist", "system-ui", "sans-serif"],
                sans: ["Geist", "system-ui", "sans-serif"],
                pixel: ['"Geist Pixel Line"', "monospace"],
                "pixel-line": ['"Geist Pixel Line"', "monospace"],
            },
            fontSize: {
                "xs-16": "16px",
                "sm-18": "18px",
                "md-24": "24px",
                "lg-55": "55px",
                "xl-60": "60px",
            },
            lineHeight: {
                90: "90px",
                32: "32px",
                21: "21px",
            },
            colors: {
                brand: {
                    emerald: "#34d399",
                    mint: "#6ee7b7",
                    lime: "#a3e635",
                    deep: "#07100d",
                    ink: "#030c09",
                    night: "#08130f",
                },
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(16px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                glow: {
                    "0%, 100%": { opacity: "0.45" },
                    "50%": { opacity: "0.75" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            animation: {
                fadeUp: "fadeUp 0.6s ease-out both",
                glow: "glow 4s ease-in-out infinite",
                shimmer: "shimmer 6s linear infinite",
            },
        },
    },
    plugins: [animatePlugin],
};
