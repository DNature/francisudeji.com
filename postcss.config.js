// const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    // ('./tailwind.config.js'),
    require('autoprefixer')
  ]
}
