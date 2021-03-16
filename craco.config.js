/* eslint-disable @typescript-eslint/no-var-requires */
const CracoLessPlugin = require('craco-less')
const colors = require('./src/styles/colors.json')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': colors.green.main },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
