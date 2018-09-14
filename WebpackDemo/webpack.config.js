const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //
            //     test:/\.(s*)css$/,
            //     use:['style-loader','css-loader', 'sass-loader']
            // },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],

            },
            {
                test: /\.(png|svg|gif|jpg|jpge|PNG)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images'
                        }
                    }

                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.html$/,
                use:
                    [
                        'html-loader'
                    ]

            },

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: '01.html',
            template: 'src/01.html'

        }),
        new HtmlWebpackPlugin({
            template: 'src/02.html',
            filename: '02.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/03.html',
            filename: '03.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/04.html',
            filename: '04.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/05.html',
            filename: '05.html'
        }),

    ],
    mode: devMode ? 'development' : 'production'
};
