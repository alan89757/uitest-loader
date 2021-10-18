const path = require("path");

module.exports = {
    entry: {
        cjs: "./src/cjs.js"
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: 'uitest',
        libraryTarget: 'umd'
    }
}