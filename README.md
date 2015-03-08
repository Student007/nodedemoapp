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

Don't forget to install the module before executing ```node test.js```
```
npm install nodedemoapp
```

Or you could add a dependancy to your package.json
```
"dependencies": {
    "nodedemoapp": "0.0.3"
}

```
and install your app by ```npm install``` within your directory

# Testing

To test whether the module works itself you can download the archive, extract the zip and execute the following with the created folder:
```
npm test
```

Because of the scripts part within package.json the bash script ```test```
will be executed 
```
"scripts": {
    "test": "for f in tests/*; do echo \"$f\"; node \"$f\"; done; echo 'Test state is OK'; exit 0"
  },
```
