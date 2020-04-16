/**
 * @description demo
 */
const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'examples/index.html',
            filename: 'index.html',
            title: 'vuikit'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, '../', 'examples/')
            }
        }
    }
}
