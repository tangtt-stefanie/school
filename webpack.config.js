
var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        publicPath: '/', // 1.HtmlWebpackPlugin生成html引入bundle.js时会在路径前加上publicPath
        //2.devServer时如果未设置devServer.publicPath的话,bundle.js和html都生成在虚拟根目录的aaa文件夹下,
        //如果设置了devServer.publicPath，则在虚拟根目录devServer.publicPath文件夹下
        //一般output.publicPath应和devServer.publicPath保持一致
        filename: 'bundle.js' // 打包后的文件名
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback:true,
        publicPath: '/',//服务启动时bundle.js和HtmlWebpackPlugin.filename生成文件在根目录的publicPath文件夹下
        // contentBase:'./ccc',//contentBase表示的是告诉服务器从哪里提供内容。（也就是服务器启动的根目录，默认为当前执行目录，一般不需要设置）
        port: 8090
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'src')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',//以template为模板生成index.html
            filename:'./index.html'//filename的路径是相对于output.path的，而在webpack-dev-server中，则是相对于webpack-dev-server配置的publicPath。
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff)$/,//url-loader涵盖url-loader
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    esModule: false//解决Vue中img图像src变成"[object Module]"无法正确加载的问题：https://www.jianshu.com/p/0877ce441561
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            { //匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
                //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    }
};