const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        open:true,
        port:3000,
        contentBase:'./'
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归TTT所有'), //版权插件给打包后的文件添加横幅说明
        new htmlWebpackPlugin({
            filename:'index.html'//生成的内存文件中的名字，此文件会自动加载内存中的bundle.js
        }),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    
};