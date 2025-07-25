const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './src/index.js',   
  output: {
    filename: 'bundle.js',    
    path: path.resolve(__dirname, 'dist'),  
  },
         

  devServer: {
    static: './dist',  
    port: 3000,        
    hot: true,         
    open: true         
  },

  module: {
    rules: [
      {
        test: /\.css$/i,           
        use: ['style-loader', 'css-loader'],  
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ],



  mode: 'production', 
};