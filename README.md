[![Stories in Ready](https://badge.waffle.io/Student007/nodedemoapp.png?label=ready&title=Ready)](https://waffle.io/Student007/nodedemoapp)
[![Build Status](https://travis-ci.org/Student007/nodedemoapp.svg?branch=master)](https://travis-ci.org/Student007/nodedemoapp)
# Node Demo App

Shows the world the steps to go to get proud to have your own ```npm install nodedemoapp```

1) Create a new project on https://github.com/new

2) Clone your new repository by downloading/unzip or
```git clone https://github.com/yourGithubUserName/repositoryName.git```

3) Create a NPM Account either by ```npm adduser``` or at https://npmjs.org/signup

4) login by ```npm login``` 

5) Within your local repository: create a package.json (you can use the ```npm init``` command what walks you through)

6) Create a server.js including the planed module
```
 exports.hello = function(who){
		console.log('Hello '+who);
	};
```

7) commit it to your repository by `git add *`, `git commit -m "your comment"` and `git push origin master`

8) where your ```package.json``` is located execute ```npm publish```

If you see ```+nodedemoapp``` you have done well :-)

9) If you like to change the readme on npmjs.com, you need to change the version in `package.json`, `git commit -m "..."`, `git push origin master` and run `npm publish`

If you see e.g. `+ nodedemoapp@1.0.1` you have done well :-)


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

# Reporting
It is recommended to show badges and graphs about activities and state of the progress behind the module or library. If you like to have badges and shields in the same fitting size you can go to http://shields.io/ or use their new [tool](https://github.com/badges/badgerbadgerbadger).

A collection of badges you can find [here](https://github.com/boennemann/badges).

Professionals are working with (agile) project management frameworks. So you also could use scrum directly within your GitHub by [Waffle.io](http://waffle.io) and show an issue based chart. 

**Note:** It would be a good idea to add an extra repository for things are not issues maybe 

Badges like [![Stories in Ready](https://badge.waffle.io/Student007/nodedemoapp.png?label=ready&title=Ready)](https://waffle.io/Student007/nodedemoapp)
[![Stories in Progress](https://badge.waffle.io/Student007/nodedemoapp.png?label=progress&title=Progress)](https://waffle.io/Student007/nodedemoapp)
came from Waffle.io same as project metrics based on issue labels (what can be added by your individual needs):

[![Throughput Graph](https://graphs.waffle.io/Student007/koa-sub-domain/throughput.svg)](https://waffle.io/Student007/koa-sub-domain/metrics)
