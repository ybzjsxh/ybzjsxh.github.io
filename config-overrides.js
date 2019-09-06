const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addWebpackPlugin
} = require("customize-cra");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    addWebpackPlugin(
      new ProgressBarPlugin({
        complete: "█",
        format: `${chalk.green("Webpack")} [ ${chalk.green(
          ":bar"
        )}] :msg: ${chalk.bold(":percent")}`,
        clear: true
      })
    ),
    // overwrite build path to fix 404, or just add homepage: './' to package.json
    config => {
      config.output.publicPath = "./";
      return config;
    }
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
