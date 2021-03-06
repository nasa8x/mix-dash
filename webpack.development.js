var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = function (env) {
    return [


        ///----------------------------
        {

            // mode: 'development',
            target: 'node',
            devtool: 'source-map',
            node: {
                __dirname: true,
                __filename: true,
            },
            entry: {

                '_': './src/index.js',
               

            },
            output: {
                libraryTarget: 'umd',
                path: path.join(__dirname, './dist'),
                filename: '[name].js',

            },
            module: {
                rules: [


                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        //exclude: /node_modules/
                    },
                    // {
                    //     test: /\.html$/,
                    //     loader: 'html-loader',
                    //     query: {
                    //         minimize: false
                    //     }
                    // },


                ]
            },
            //externals: [/^(?!\.|\/).+/i,],
            externals: [nodeExternals({
                allowlist: [/^underscore/]
            })],
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
                }),
            ]
        },


    ]
}
