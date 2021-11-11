module.exports = {
    style: {
        postprocess : {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ],
        },
    },
}