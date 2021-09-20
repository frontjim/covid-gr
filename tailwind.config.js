module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        screens: {
            'sm': { 'max': '639px' },
            'md': '768px',
        },
        extend: {},
        backgroundColor: theme => ({
            ...theme('colors'),
            'pri': '#121212',
            'sec': '#1f1f1f',
        })

    },
    variants: {
        extend: {},
    },
    plugins: [],
}