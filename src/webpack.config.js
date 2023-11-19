const path = require("path");

module.exports = {
  // Your other Webpack configuration settings

  resolve: {
    fallback: {
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      zlib: require.resolve("browserify-zlib"),
    },
  },
};
