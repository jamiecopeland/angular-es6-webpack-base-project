// --------------------------------------------------
// Sass imports

require('index.scss');

// --------------------------------------------------
// Vendor imports

require('src/vendor.js')();

// --------------------------------------------------
// Library imports

var angular = require('angular');

// --------------------------------------------------
// Project imports

var appModule = require('src/app');

// --------------------------------------------------
// Production config

function configureForProduction(appModule) {
  appModule.config(($compileProvider, $httpProvider) => {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
  });
}

if(ENV_VARS.deploymentMode.production) {
  configureForProduction(appModule);
}

// --------------------------------------------------
// Initialization

angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name], {
      strictDi: true
    }
  );
});
