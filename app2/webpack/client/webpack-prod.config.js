import path from "path";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import tailwindcss from "tailwindcss";

import HtmlWebpackPlugin from 'html-webpack-plugin';
// import autoprefixer from "autoprefixer";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import packageJson from '../../package.json' assert { type: "json" };
import webpack from "webpack"; 
const {ModuleFederationPlugin} = webpack.container;

const isProduction = true;
const __dirname = path.resolve();
const dependencies = packageJson.dependencies;
const config = {
  mode: "development", 
  entry: "./src/index.tsx",
  output: {
    publicPath: "/", // <-- Adjust for deployment environment
	},
  optimization: { 
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias:{
      "os": path.resolve(__dirname, "../node_modules/os"),
      "process": "process/browser"
    },
  }, 
  module: {
    rules: [ 
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: "../tsconfig.json",
            },
          },
        ],
      },
       
    ],
  },

  devServer:  {    
    static: path.join(__dirname), 
    devMiddleware: {
      writeToDisk: true,
      mimeTypes: {
        "application/x-javascript": ["js"],
        "application/x-typescript": ["ts", "tsx"],
        "video/mp2t": ["mp2t"],
        "text/html": ["text/html"],
      }
    },  
    compress: true,
    port: 5003,  
    open: false,
    hot: true,
    client :{
      progress: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "X-Content-Type-Options": "nosniff",
      "MIME-Type": [ "text/html", "application/x-javascript", "text/javascript", "text/x-typescript","application/x-typescript", "video/mp2t"],
      }
  },
  plugins: [ 
    
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				collapseWhitespace: true, // <-- Enable HTML minification
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
    new ModuleFederationPlugin({
      name: "mainapp",
      runtime: "mainapp", 
      remotes: {
        "remote": "remote@http://localhost:5001/remoteEntry.js", 
      },  
      shared: { 	 
        "buffer": {
          singleton: true,
          requiredVersion: dependencies.buffer,
          eager: true,
        },
        ...dependencies
			}
    }),  
  ],
};

export default config;
