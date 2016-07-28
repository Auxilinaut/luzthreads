var gulp = require('gulp'),
	del = require('del'),
    path = require('path'),
    Builder = require('systemjs-builder'),
    ts = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

var appDev = 'app';
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

/** then bundle either for prod */
gulp.task('bundleProd', ['ts'], function() {
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
        .buildStatic(appProd + '/main.js', appProd + '/bundle.js', { minify: true, sourceMaps: false})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

/** or bundle for dev */
gulp.task('bundleDev', ['ts'], function() {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'systemjs.config.js');

    /*
       the parameters of the below buildStatic() method are:
           - transcompiled application boot file (the one which contains the bootstrap(App, [PROVIDERS]) function)'
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

/** this builds for prod */
gulp.task('buildProd', ['libs', 'ts', 'bundleProd']);
/** this builds for dev */
gulp.task('buildDev', ['ts', 'bundleDev']);

/** copies all necessary resources into dist/ after a clean */
gulp.task('resources', ['clean'], () => {
    return gulp.src(["!**/*.ts", "!node_modules/", "!node_modules/**", "!dist/", "!dist/**", "**/*"])
        .pipe(gulp.dest("dist"));
});
/** copies only html resources into dist/ */
gulp.task('html', ['dehtml'], () => {
    return gulp.src(["*.html"])
        .pipe(gulp.dest("dist"));
});
/** copies only app/js into dist/ */
gulp.task('js', () => {
    return gulp.src(["app/*.js"])
        .pipe(gulp.dest("dist"));
});
/** copies required shims and libs into dist/lib/ */
gulp.task('libs', ['resources'], () => {
	return gulp.src([
            'es6-shim/es6-shim.min.js',
            'reflect-metadata/Reflect.js',
            'zone.js/dist/**'
        ], {cwd: "node_modules/**"}) // Glob required here.
        .pipe(gulp.dest("dist/lib"));
});

/** removes html files from dist/ */
gulp.task('dehtml', (cb) => {
    return del(["dist/*.html"], cb);
});
/** removes js from dist/ */
gulp.task('debundle', (cb) => {
    return del(["dist/app/*.js"], cb);
})
/** removes dist/ */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/** clean, compile, and copy into dist/ for prod */
gulp.task('ready', ['clean', 'resources', 'libs', 'buildProd']);
/** recompile only for dev */
gulp.task('recompile', ['dehtml','debundle','html','buildDev']);