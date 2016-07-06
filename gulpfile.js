var gulp = require('gulp'),
	del = require('del'),
    path = require('path'),
    Builder = require('systemjs-builder'),
    ts = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

var appDev = 'app'; // where your ts files are, whatever the folder structure in this folder, it will be recreated in the below 'dist/app' folder
var appProd = 'dist/app';

/** first transpile ts files */
gulp.task('ts', () => {
    return gulp.src(appDev + '/**/*.ts')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appProd));
});

/** then bundle */
gulp.task('bundle', ['ts'], function() {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'systemjs.config.js');

    /*
       the parameters of the below buildStatic() method are:
           - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
           - the output (file into which it would output the bundled code)
           - options {}
    */
    return builder
        .buildStatic(appProd + '/main.js', appProd + '/bundle.js', { minify: false, sourceMaps: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

/** this builds the thing, with bundling */
gulp.task('build', ['ts', 'bundle']);

/** removes dist/ */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/** copies necessary resources into dist/ */
gulp.task('resources', ['clean'], () => {
    return gulp.src(["!**/*.ts", "!node_modules/", "!node_modules/**", "!dist/", "!dist/**", "**/*"])
        .pipe(gulp.dest("dist"));
});

/** copies some shims and stuff into dist/lib/ */
gulp.task('libs', ['resources'], () => {
	return gulp.src([
            'es6-shim/es6-shim.min.js',
            'reflect-metadata/Reflect.js',
            'zone.js/dist/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/lib"));
});

/** clean, compile, and copy into dist/ */
gulp.task('ready', ['resources', 'libs', 'build']);