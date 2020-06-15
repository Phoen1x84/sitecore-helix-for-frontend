const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jest = require('gulp-jest').default;
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sassLint = require('gulp-sass-lint');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const argv = require('yargs').argv;

sass.compiler = require('node-sass');

let projectName = argv.project || 'Commercial';

let foundation = './src/Foundation/**';
let feature = './src/Feature/**';
let project = `./src/Project/${projectName}.Website`;

let wwwroot = argv.wwwroot || 'C:/inetpub/wwwroot/SugukDemo/website';

let paths = {
    wwwroot: wwwroot,
    copyDirectory: [`./dist/**/*.*`],
    scripts: {
        src: [
            `${feature}/**/*.js`,
            `${project}/Feature/**/*.js`,
            `${project}/Foudation/**/*.js`,
            `${project}/*.js`
        ],
        tests: [
            `${feature}/**/__tests__/*.js`,
            `${project}/Feature/**/__tests__/*.js`,
            `${project}/Foundation/**/__tests__/*.js`
        ],
        dist: `./dist/${projectName}`,
        filename: 'index.js'
    },
    styles: {
        src: `${project}/index.scss`,
        dist: `./dist/${projectName}`,
        filename: 'index.css'
    },
    images: {
        src: [
            `${project}/assets/**/*`,
            `${project}/feature/**/images/*`,
            `${project}/project/**/images/*`
        ],
        dist: `./dist/images`
    }
};

function clean() {
    console.log('\x1b[33m%s\x1b[0m', 'Deleting dist directory');
    return del([`./dist/${project}/`]);
};

function styles() {
    console.log('\x1b[33m%s\x1b[0m', 'Compiling SCSS files');
    return gulp.src(paths.styles.src)
        .pipe(sassGlob({
            allowEmpty: true
        }))
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }).on('error', sass.logError))
        // .pipe(cssnano())
        // .pipe(autoprefixer({
        //     cascade: false
        // }))
        .pipe(gulp.dest(paths.styles.dist));
};

function test() {
    return gulp.src(paths.scripts.tests).pipe(jest());
};

function jslint() {
    return gulp.src(paths.scripts.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

function scripts() {
    console.log('\x1b[33m%s\x1b[0m', 'Compiling JavaScript files');
    var bundle = browserify({
        entries: `${project}/${paths.scripts.filename}`,
        debug: true
    }).transform('babelify');
    return bundle.bundle()
        .pipe(source(paths.scripts.filename))
        .pipe(buffer())
        //.pipe(uglify()) // commented for demo
        .pipe(gulp.dest(paths.scripts.dist));
};

function copyFiles() {
    console.log('\x1b[33m%s\x1b[0m', 'Publishing folder');
    return gulp.src(paths.copyDirectory, {
        base: ''
    })
        .pipe(gulp.dest(`${paths.wwwroot}/dist`));
};

function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin({
            verbose: true
        }, [
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(rename({
            dirname: '' // renames folder path to keep the file structure flat
        }))
        .pipe(gulp.dest(paths.images.dist));
};

function watch() {
    // will need to support multi-site    
    gulp.watch(`${project}/**/*.js`, gulp.series(test, jslint, scripts, copyFiles));
    gulp.watch(`${project}/**/*.scss`, gulp.series(styles, copyFiles));
};

// Tasks
const build = gulp.series(clean, test, jslint, gulp.parallel(scripts, styles, images), copyFiles);
/*
 * default task that can be running `gulp` from cli
 */
gulp.task('default', watch);
gulp.task('build', build);
