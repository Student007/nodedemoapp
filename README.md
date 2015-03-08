# Node Demo App

Shows the world the steps to go to get proud to have your own ```npm install nodedemoapp```

1) Create a NPM Account either by ```npm adduser``` or at https://npmjs.org/signup

2) login by ```npm login``` 

3) Create a package.json (you can use the ```npm init``` command what walks you through)

4) Create a server.js including the planed module
```
 exports.hello = function(who){
		console.log('Hello '+who);
	};
```

5) commit it to your repository 

6) where your ```package.json``` is located execute ```npm publish```

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
In our example test case it executes code of tests/requireModueTest.js 
```
var mod = require('../server.js');
try {
	mod.hello('Testing User - Method exists (Test successful)');
}
catch (err){
	console.log('something doesn\'t work well (Test failed)');
}
```
