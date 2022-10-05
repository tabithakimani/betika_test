/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js,vue}"],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '780px',
            // => @media (min-width: 768px) { ... }

            'lg': '1030px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width : 1280px) { ... }

            '2xl': '2000px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                'Montserrat': ['Montserrat', 'sans-serif']
            },
            textUnderlineOffset: {
                16: '30px',
            },
            height: {
                "screen-mid": "60vh",
                "screen/2": "calc(100vh / 2)",
                "screen/3": "calc(100vh / 3)",
                "screen/4": "calc(100vh / 4)",
                "screen/5": "calc(100vh / 5)",
            }
        },

        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            slate: '#E4E4E7',
            faint: '#7e7e7f',
            dark_gray: '#494949',
            card: '#f5f5f5',
            dark_blue: '#2b3240',
            cyan: {
                400: '#02ccc2'
            },

            red: {
                400: '#FC8181',
                500: '#F56565',
                600: '#E53E3E',
                650: '#e40136',
                700: '#C53030',
                800: '#9B2C2C',
                900: '#742A2A',
                1000: '#e40136',
                950: '#bd515f'
            },
            zinc: {
                400: '#a1a1aa',
                500: '#828284',
                600: '#7e7e7f',
                700: '#3f3f46',
                800: '#27272a',
                900: '#18181b',
            },
            green: {
                400: '#28edc8',
                500: '#48BB78',
                600: '#38A169',
                700: '#2F855A',
                750: '#007861',
                800: '#276749',
                900: '#22543D',

            },
            gray: {
                100: '#f3f4f6',
                200: '#e2e8f0',
                300: '#d1d5db',
                400: '#A1A1AA',
                450: '#94a3b8',
                500: '#6b7280',
                550: '#666666',
                600: '#4b5563',
                700: '#374151',
                750: '#2b3240',
                800: '#1f2937',
                900: '#1a202c',
            },
            yellow: {
                400: '#ffe7b4',
                450: '#e7c600',
                500: '#e69d01',


            },
            blue: {
                400: '#a0c5ff',
                100: '#f5fafc',
                800: '#1e40af',
                900: '#133b7d'

            },
            pink: {
                400: '#ff9bd2',
                500: '#db2777',
                600: '#be185d',
                700: '#9d174d',
                800: '#9a115c',
                850: '#9a135d',
                900: '#831843',
            }

        },
    },
    plugins: [],
}
