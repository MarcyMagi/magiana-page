module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/magiana-page/'
    : '/',

    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        }
    }
};