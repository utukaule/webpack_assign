const path = require("path");


module.exports = {
    mode:"development",
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader','css-loader'] },
        {test: /\.html$/i,loader: "html-loader",},
        {test: /\.(png|jpe?g|gif)$/i,use: [{ loader: 'file-loader',},],},
        // { test: /\.ts$/, use: 'ts-loader' },
      ],
    },
  };
  