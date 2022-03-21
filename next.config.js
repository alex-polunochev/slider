const DeadCodePlugin = require('webpack-deadcode-plugin');

module.exports = {
  reactStrictMode: true,
  webpack5: false,
  webpack: (config, options) => {
    // console.log('config: %o', config.module.rules);
    // config.module.rules = [
    //   ...config.module.rules,
    //   {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: [['env', { modules: false }]]
    //     }
    //   }
    // ];
    config.optimization = {
      ...config.optimization,
      usedExports: true
    };
    config.plugins = [
      ...config.plugins,
      new DeadCodePlugin({
        patterns: ['src/**/*.(js|jsx|css)'],
        exclude: ['**/*.(stories|spec).(js|jsx)']
      })
    ];
    return config;
  }
};
