const path = require('path');
const glob = require("glob");
const {testGlob} = require('./package.json');
const testFiles = glob.sync(testGlob);

const testsSetup = [path.join(__dirname, 'dist', 'test', 'setup.js')];
module.exports = {
    context: __dirname,
    devtool: 'eval',
    entry: {
        test : testsSetup.concat(testFiles),
        webtest: testsSetup.concat(testFiles.map(fileName => `mocha!${fileName}`))
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        pathinfo: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        hot: false
    },
    module: {
        noParse: [/\.min\.js$/, /\.bundle\.js$/]
    }
};
