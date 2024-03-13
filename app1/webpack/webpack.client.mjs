import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpack from "webpack";
import path from "path";
const {ModuleFederationPlugin} = webpack.container;
const __dirname = path.resolve();

const config = {
  mode: "development",
  entry: { 
    stores: "./stores",
 },
 optimization: { 
  splitChunks: {
    chunks: "all",
  },
 },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/", 
    },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
        
          },
        ], 
      },
    ],
  },
  devServer: {
    static: path.join(__dirname),
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
      mimeTypes: {
        "application/x-javascript": ["js"],
        "application/x-typescript": ["ts", "tsx"],
        "video/mp2t": ["mp2t"],
        "text/html": ["html"],
      }
    },
    compress: true,
    port: 5001,
    open: false,
    hot: true,
    client: {
      progress: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "X-Content-Type-Options": "nosniff",
      "MIME-Type": [ "application/x-javascript", "application/x-typescript", "video/mp2t"],
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        "remote": "remote@http://localhost:5001/remoteEntry.js", 
      },
      exposes: {
        "./stores": "./stores/auth/localStore.ts",
      },
      shared: {
        "react-redux": {
          singleton: true,
          requiredVersion: "9.1.0",
          eager: true,
        },
        "react": {
          singleton: true,
          requiredVersion: "18.2.0",
          eager: true,
        },
        "buffer": {
          singleton: true,
          requiredVersion: "6.0.3",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "18.2.0",
          eager: true,
        }
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportTitle: "auth bundle analysis",
      openAnalyzer: false,
    }),
  ],
};

export default config;