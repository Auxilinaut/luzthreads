(function(global) {
  System.config({
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
      experimentalDecorators: true,
      typeCheck: true
    },

    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },

    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      // other libraries
      'typescript': 'npm:typescript',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'moment':					  'npm:moment/moment.js',
	    '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      'instafeed':         'js/instafeed.min.js',
      'firebase': 'npm:firebase',
      'angularfire2': 'npm:angularfire2',
      'traceur': 'npm:traceur',
      'ng2-map': 'npm:ng2-map/dist'
    },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      typescript: {
        "main": "lib/typescript.js",
        "meta": {
          "lib/typescript.js": {
            "exports": "ts"
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        defaultExtension: 'js',
        main: './index.js'
      },
      'firebase': {
        defaultExtension: 'js',
        main: './firebase.js'
      },
      'angularfire2': {
        defaultExtension: 'js',
        main: './angularfire2.js'
      },
      'traceur': {
        defaultExtension: 'js',
        main: './bin/traceur.js'
      },
      'ng2-map': {
        defaultExtension: 'js',
        main: 'ng2-map.umd.js'
      }
    }
  });
})(this);
