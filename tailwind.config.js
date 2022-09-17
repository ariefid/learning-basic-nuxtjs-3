/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "components/**/*.{vue,js,jsx,ts,tsx,md}",
        "composables/**/*.{vue,js,jsx,ts,tsx,md}",
        "content/**/*.{vue,js,jsx,ts,tsx,md}",
        "layouts/**/*.{vue,js,jsx,ts,tsx,md}",
        "pages/**/*.{vue,js,jsx,ts,tsx,md}",
        "plugins/**/*.{vue,js,jsx,ts,tsx,md}",
        "{A,a}pp.{vue,js,jsx,ts,tsx,md}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
