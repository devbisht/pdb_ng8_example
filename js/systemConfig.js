/**
 * @file
 * This builds our system config and imports our main app file.
 */

(function (drupalSettings) {
  'use strict';

  var pdb_module_path =  drupalSettings.path.baseUrl + drupalSettings.pdb.ng8.module_path;
  var modulePath = drupalSettings.path.baseUrl + drupalSettings.pdb_ng8_example.path;
  //var ext = (drupalSettings.pdb.ng8.development_mode === 0) ? 'js' : 'ts';

  var packages = {};
  var maps = {};

  var pdb_packages = {
    'animations': {
      'sub_modules': ['browser']
    },
    'platform-browser': {
      'sub_modules': ['animations']
    },
  }
  buildPackages(maps, packages, pdb_packages, pdb_module_path);

  var new_packages = {
    'cdk': {
      'sub_modules': ['a11y', 'platform', 'keycodes', 'coercion','observers', 'bidi']
    },
    'material': {
      'sub_modules': ['core', 'card']
    }
  };
  buildPackages(maps, packages, new_packages, modulePath);

  // config all the libraries
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      "target": "es5",
      "module": "system",
    },
    packages: packages,
    map: maps
  });


  function buildPackages(maps, packages, ngPackageNames, path) {
    for (var ngPackage in ngPackageNames) {
      maps['@angular/' + ngPackage] = path + '/node_modules/@angular/' + ngPackage + '/bundles/' + ngPackage + '.umd.js';
      packages['@angular/' + ngPackage] = {defaultExtension: 'js'};

      for (var sub_modules in ngPackageNames[ngPackage]) {
        if(ngPackageNames[ngPackage][sub_modules]) {
          var sub_pkgs = ngPackageNames[ngPackage][sub_modules];
          sub_pkgs.forEach(function (sub_pkg) {
            maps['@angular/' + ngPackage + '/' + sub_pkg] = path + '/node_modules/@angular/' + ngPackage + '/bundles/' + ngPackage + '-' + sub_pkg + '.umd.js'
            packages['@angular/' + ngPackage + '/' + sub_pkg] = {defaultExtension: 'js'}
          })
        }
      }

    }
  }
  
})(drupalSettings);
