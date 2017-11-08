/*  __.-._
 *  '-._"7'  JediFocus
 *   /'.-c
 *   |  /T   Do. Or do not.
 *  _)_/LI   There is no try.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const { join } = require( 'path' );

module.exports = {
    entry: {
        app: join( __dirname, 'src/index.js' )
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
            test: /firebase\.js$/,
            use: 'script-loader'
        }, {
            test: /\.js$/,
            include: [
                join( __dirname, 'src' ),
                join( __dirname, 'node_modules/dombili' ),
                join( __dirname, 'node_modules/kink' ),
                join( __dirname, 'node_modules/delgado' ),
                join( __dirname, 'node_modules/tangled' ),
                join( __dirname, 'node_modules/jedifocus.lib' ),
                join( __dirname, 'node_modules/jedifocus.containers' ),
                join( __dirname, 'node_modules/jedifocus.components' ),
                join( __dirname, 'node_modules/jedifocus.store' ),
                join( __dirname, 'node_modules/jedifocus.buttons' ),
                join( __dirname, 'node_modules/jedifocus.icons' ),
                join( __dirname, 'node_modules/jedifocus.feedback' )
            ],
            use: [ 'babel-loader' ]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract( { fallback: 'style-loader', use: 'css-loader!sass-loader' } )
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
            title: 'JediFocus',
            template: 'src/index.ejs',
            filename: 'index.html'
        } )
    ]
};
