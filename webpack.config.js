const path = require('path');

module.exports = {
    mode: "production",
    entry: './goto-pixiv.ts',
    output: {
        filename: 'goto-pixiv.js',
        path: path.resolve(__dirname, '.'),
        library: {
            type: 'module',
        },
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    experiments: {
        outputModule: true,
    },
}
