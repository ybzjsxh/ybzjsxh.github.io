const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll
} = require("customize-cra");

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    // overwrite build path to fix 404, or just add homepage: './' to package.json
    config=>{
      config.output.publicPath="./"
      return config
    }
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};