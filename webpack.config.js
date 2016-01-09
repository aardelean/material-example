module.exports = {
  context: __dirname + "/client",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
 module: {
         loaders: [{
             test: /\.js?$/,
             loader: 'babel',
             query:
             {
                 presets:['es2015', "stage-0", "stage-1", 'react']
             }
         },
         {
             test: /\.html$/,
             loader: "file?name=index.[ext]",
        }]
 }
}
