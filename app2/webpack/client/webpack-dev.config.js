import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; 
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'; 
const isProduction = false;
const __dirname = path.resolve();  
import NodePolyFillPlugin from "node-polyfill-webpack-plugin";
import fs from 'browserify';
 
export default (env) => {
	console.log('env', __dirname);
	return {
		mode: 'development',
		entry: './src/index.tsx',
		output: {
			filename:  'bundle.[contenthash].js',
			path: path.join(__dirname, 'dist'), 
			publicPath: '/', 
			clean: true
		},
		resolve: {
			extensions: ['.tsx','.ts','.js'],
			alias:{
				"react": path.resolve(__dirname, "../node_modules/react"),
				"os": path.resolve(__dirname, "../node_modules/os"),
				"react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
				"react-router": path.resolve(__dirname, "../node_modules/react-router"),
				"react-router-dom": path.resolve(__dirname, "../node_modules/react-rouer-dom"),
				"@types/react": path.resolve(__dirname, "../node_modules/@types/react"),
				"@types/react-dom": path.resolve(__dirname, "../node_modules/@types/react-dom"), 
				"process": "process/browser"
			},
			fallback:{
				fs: false
			}
		},
		watch: true,
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300, // Delay in milliseconds before rebuilding
			poll: 1000, // Check for changes every second
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					}
				},
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader', {loader: 'ts-loader', options:{
						configFile: '../tsconfig.json'
					}}],
				},
				{
					test: /\.m?js$/i, 
					resolve: {
						fullySpecified: false
					}
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
					  "style-loader", // creates style nodes from JS strings
					  'css-loader',
					  {
						loader: 'sass-loader',
						options: {
						  sassOptions: {
							plugins: [tailwindcss, autoprefixer],
							includePaths: ["./src/index.scss"],
						  },
					  }
					},
					  {
						loader: 'postcss-loader',
						options: {
						  postcssOptions: {
							plugins: [tailwindcss({
							  content: [
								'./**/*.scss',
							  ]
							}), autoprefixer]
						  },
						  
						}
					  }
					],
					exclude: /node_modules/,
				  }
				  
			]
		},
		plugins: [ 
			new NodePolyFillPlugin(),
			new BundleAnalyzerPlugin({
				analyzerMode: 'static', 
				reportTitle: 'UNNAMED bundle analysis',
				openAnalyzer: false
			}),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: 'index.html',
				minify: {
					collapseWhitespace: isProduction,
					removeComments: isProduction,
					removeRedundantAttributes: isProduction,
					removeScriptTypeAttributes: isProduction,
					removeStyleLinkTypeAttributes: isProduction,
					useShortDoctype: isProduction
				}
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.[contenthash].css'
			}), 
		],
		devServer:  {    
			static: path.join(__dirname, 'dist'), 
			devMiddleware: {
				writeToDisk: true
			}, 
			compress: true,
			port: 3000,  
			open: false,
			hot: true,
			client :{
				progress: true
			},
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			  }
		}
	};
}

