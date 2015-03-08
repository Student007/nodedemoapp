var mod = require('../server.js');
try {
	mod.hello('Testing User - Method exists (Test successful)');
}
catch (err){
	console.log('something doesn\'t work well (Test failed)');
}
