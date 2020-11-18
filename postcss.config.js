module.exports = {
    plugins: {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
    module: {
        rules: [
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ],
      },
  }