export default ()=> {

  // Prevent Angular from defaulting to JQLite by requiring JQuery before Angular.
  global.$ = global.jQuery = require('jquery');
  require('angular');

};