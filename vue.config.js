const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('stylus',resolve('src/assets/stylus'))
            .set('image',resolve('src/assets/image'))
            .set('api',resolve('src/api'))
            .set('base',resolve('src/base'))
    }
}
