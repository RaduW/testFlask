const path = require('path');

module.exports = {
    entry: {
        hello: './src/hello.ts',
        page1: './src/page1.ts',
        page2: './src/page2.ts',
        page3: './src/page3.ts',

    },
    devtool: "inline-source-map",
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
