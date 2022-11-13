/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'crayola': {
                500: '#F4D35E'
            },
            'oxford': {
                100: '#D8ECFD',
                300: '#89C6FA',
                500: '#0C82E9',
                900: '#02182B',
            },
            'cultured': {
                100:'#F6F7F8'
            }
        },
        extend: {},
    },
    plugins: [],
}
