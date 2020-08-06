const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//配置说明:
//output.filename为打包后文件名
//output.path为生成的文件的路径，__dirname为webpack.config.js所在目录
//使用devServer

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // 将 `.ts` 添加为一个可解析的扩展名。
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        open:true,
        port:3000,
        hot:true
    },
    plugins:[
        new VueLoaderPlugin(),//搭配vue-loader,将其他规则比如对js的解析加入到.vue文件里
        new webpack.BannerPlugin('最终版权归TTT所有'), //版权插件给打包后的文件添加横幅说明
        new htmlWebpackPlugin({
            title:'school',//设置生成在内存中html文件的<title>school</title>
            template: path.join(__dirname,'./public/index.html'),//指定模板页面，会根据此配置生成内存中的html
            filename:'index.html'//生成的内存文件中的路径和名字，此文件会自动加载生成在内存中的bundle.js生成的目录为webpack.output.path
        }),
    ],
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [ 
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "less-loader" // compiles Less to CSS
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    }
};