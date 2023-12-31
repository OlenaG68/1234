import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#009ed9",
                mute: "#a9aaa9",
            },
            gridTemplateRows: {
                "mob-grid": "75px 1fr",
            },
        },
    },
    plugins: [],
};
export default config;
