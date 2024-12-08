const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  outputDir: "dist",

  assetsDir: "static",

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/assets/styles/app.scss"
        )}";`,
      },
    },
  },
};
