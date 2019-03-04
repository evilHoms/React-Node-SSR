module.exports = {
  plugins: [
    require('precss'),
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('postcss-nesting'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
}