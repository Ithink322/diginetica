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
        additionalData: `@import "@/assets/styles/app.scss";`,
      },
    },
  },
};
