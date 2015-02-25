var mod = require('./../server.js');
if('Hello GitHub' === mod.hello('GitHup')){
  console.log('Require module successful');
} else {
  console.log('Require module FAILD');
}
