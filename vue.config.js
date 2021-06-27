module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          additionalData: `@import "@/scss/_variables.scss"`
        }
      }
    }
  }
};