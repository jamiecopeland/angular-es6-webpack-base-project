var rootModule = require('angular').module('root', []);

rootModule.directive('root', require('./Root'));

export default rootModule;
