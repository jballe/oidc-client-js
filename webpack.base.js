// create a webpack configuration with all common parts included here
var createWebpackConfig = function(options) {
  return {
    mode: options.mode,
    entry: options.entry,
    output: options.output,
    plugins: options.plugins,
    node: {
      buffer: 'empty'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
          include: __dirname
        }
      ]
    },
    // this is for the sourcemaps
    devtool: options.devtool,
    optimization: options.optimization
  };
};

module.exports = createWebpackConfig;
