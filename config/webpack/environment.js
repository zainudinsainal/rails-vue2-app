const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const path = require("path")

const customConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "app/javascript/src")
    }
  },
}
environment.config.merge(customConfig)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
