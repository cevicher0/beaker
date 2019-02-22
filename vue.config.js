const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "main.ts",
  css: { extract: false },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/beaker/'
    : '/',

  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Oleo Script", variants: ["700"] }
      ]
    })
  ]
}
