# Notes


## Secition 4

After configuring the startup scripts in `package.json` and the dev server in `webpack.config.js` the command to start the server is:
```bash
npm run start
```

`http://localhost:8081/webpack-dev-server` - shows what the dev server is going to run

Current location: https://app.pluralsight.com/player?course=transpiling-bundling-javascript-webpack&author=wes-mcclure&name=e33f2be0-5cbd-4959-822b-059b37ffb299&clip=18&mode=live
"Hot swapping methods in a live..."

Current Problem: `Can't resolve 'module' in 'C:\Users\u0146\Documents\Source\Pluralsight\transpiling-bundling-javascript-webpack\optimizing-web-apps-webpack\app\klondike'`

### Notable 
### `webpack.config.js` settings
* `contentBase: path.resolve(__dirname, 'app'),`sets the folder to serve as the root of the website
* `watchContentBase: true,` - watch static files that aren't yet in the webpack package (has some overhead, usually only used during migration)
* `publicPath: '/dist/',` location of the webpack bundle output to serve

### `package.json` settings
* `"start": "nodemon -w webpack.config -x webpack-dev-server -- --port 8081 --open",`
    * use nodemon to monitor webpack.config and restart the server if it changes
        * `-x` is the execution command
        * the extra `--` is to prevent nodemon consuming the params meant for the dev server

## Links:
* webpack docs - https://webpack.js.org/concepts/
* webpack dev server docs - https://webpack.js.org/configuration/dev-server/