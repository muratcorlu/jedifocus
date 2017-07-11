/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
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
            test: /\.js$/,
            include: [
                join( __dirname, 'src' ),
                join( __dirname, 'node_modules/dombili' ),
                join( __dirname, 'node_modules/kink' ),
                join( __dirname, 'node_modules/delgado' )
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
