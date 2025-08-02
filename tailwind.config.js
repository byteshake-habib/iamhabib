/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                secondary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-gentle': 'bounceGentle 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
                gradient: 'gradient 6s ease infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'gradient-y': 'gradient-y 15s ease infinite',
                'gradient-xy': 'gradient-xy 15s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'gradient-x': {
                    '0%, 100%': {
                        transform: 'translateX(0%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                },
                'gradient-y': {
                    '0%, 100%': {
                        transform: 'translateY(0%)',
                    },
                    '50%': {
                        transform: 'translateY(100%)',
                    },
                },
                'gradient-xy': {
                    '0%, 100%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '25%': {
                        transform: 'translate(100%, 0%)',
                    },
                    '50%': {
                        transform: 'translate(100%, 100%)',
                    },
                    '75%': {
                        transform: 'translate(0%, 100%)',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
                colored:
                    '0 10px 25px -3px rgba(59, 130, 246, 0.35), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
