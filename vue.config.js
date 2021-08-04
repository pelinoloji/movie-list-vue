module.exports = {
  devServer: {
    host: "localhost",
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          additionalData: `@import "@/scss/_variables.scss"`,
        },
      },
    },
  },
};
