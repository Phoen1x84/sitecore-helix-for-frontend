const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'residential.bundle.js'
    }
};