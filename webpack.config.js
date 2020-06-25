const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                use:[MiniCSSExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.s[ca]ss$/,
                use:[MiniCSSExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|gif|svg|jpg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'images',
                            name:'[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(ttf|otf|eot|woff)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'fonts',
                            name:'[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename:'main.css'
        })
    ],
    devServer: {
        open:true
    }
}