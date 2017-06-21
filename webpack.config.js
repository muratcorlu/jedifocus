const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const { join } = require( 'path' );

module.exports = {
    entry: {
        app: join( __dirname, 'src/index.js' ),
    },

    output: {
        path: join( __dirname, 'public' ),
        filename: 'js/bundles/[name].[hash].bundle.js',
        pathinfo: process.env.WEBPACK_ENV !== 'production',
        publicPath: '/'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: join( __dirname, 'public' ),
        historyApiFallback: true
    },

    module: {
        rules: [ {
            test: /\.js$/,
            include: [
                join( __dirname, 'src' ),
                join( __dirname, 'node_modules/dombili' )
            ],
            use: [ 'babel-loader' ]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract( { fallback: 'style-loader', use: 'css-loader' } )
        } ]
    },

    plugins: [
        new ExtractTextPlugin( {
            filename: 'css/bundles/[name].[hash].bundle.css',
            disable: false,
            allChunks: true
        } ),
        new HtmlWebpackPlugin( {
            env: process.env.NODE_ENV || 'development',
            title: 'Jedi Focus',
            template: 'src/index.ejs',
            filename: 'index.html'
        } )
    ]
};
