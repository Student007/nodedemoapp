# Node Demo App

Shows the world the steps to go to get proud to have your own ```npm install nodedemoapp```

1) Create a package.json and commit it to this repository

2) Create a server.js within ```console.log('Hello GitHub')```

3) Create a NPM Account either by ```npm adduser``` or at https://npmjs.org/signup

4) login by ```npm login``` 

5) change directory where your ```package.json``` is located

6) ```npm init``` or ```npm publish```

If you see ```+nodedemoapp``` you have done well :-)


# Try it

To use your first own node module you simple create a test.js
```
var demo = require('nodedemoapp');
demo.hello('GitHub');
```

Don't forget to install the module before executing test.js
```
npm install nodedemoapp
```

Or you could add a dependancy to your package.json
```
"dependencies": {
    "nodedemoapp": "^0.0.1",
}

```
and install your app by ```npm install``` within your directory
