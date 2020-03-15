var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var newer        = require('gulp-newer');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var pug          = require('gulp-pug');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var imagemin     = require('gulp-imagemin');
var jshint 		 = require('gulp-jshint');
var uglify 		 = require('gulp-uglify');
var rename 		 = require('gulp-rename');
// var data         = require('gulp-data');
// var fs           = require('node-fs');

var onError = function(err) {
    notify.onError({
        title:    "Error",
        message:  "<%= error %>",
    })(err);
    this.emit('end');
};

var plumberOptions = {
    errorHandler: onError,
};

var jsFiles = {
    vendor: [

    ],
    source: [
        'src/assets/js/src/Utility.js',
        'src/assets/js/src/components/ComponentForm.jsx',
        'src/assets/js/src/components/Component.jsx',
    ]
};

// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src(jsFiles.source)
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Compile Sass to CSS
gulp.task('sass', function() {
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };

    var filterOptions = '**/*.css';

    var reloadOptions = {
        stream: true,
    };

    var sassOptions = {};

    return gulp.src('app/src/assets/sass/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(filter(filterOptions))
        .pipe(reload(reloadOptions))
        .pipe(notify({ message: 'Sass complete' }));
});

// Pug to HTML
gulp.task('pug', function() {
    return gulp.src('app/src/**/*.pug')
        .pipe(plumber(plumberOptions))
        // .pipe(data( function(file) {
        //               return JSON.parse(
        //                 fs.readFileSync('app/src/data/content.json')
        //               );
        //             } ))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream:true}))
        .pipe(notify({ message: 'Pug complete' }));
});

// Image Minify and move
gulp.task('images', function() {
    return gulp.src('app/src/assets/img/**/*.{jpg,png,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/img/'))
        // .pipe(reload({stream:true}))
        .pipe(notify({ message: 'Images complete' }));
});

//zach


// Scripts minify and move
gulp.task('scripts', function() {
    return gulp.src('app/src/assets/js/*.js')
        .pipe(plumber())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(reload({stream:true}))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Watch JS/JSX, Pug, and Sass files
gulp.task('watch', function() {
    gulp.watch('app/src/**/*.pug', ['pug']);
    gulp.watch('app/src/assets/js/*.js', ['scripts']);
    gulp.watch('app/src/assets/img/**.*', ['images']);
    gulp.watch('app/src/assets/**/*.{js,jsx}', ['concat']);
    gulp.watch('app/src/**/*.scss', ['sass']);
});

// BrowserSync
gulp.task('browsersync', function() {
    browserSync({
        server: {
            baseDir: './build/'
        },
        open: true,
        online: true,
        notify: true,
    });
});

// gulp.task('build', ['pug', 'sass', 'copy-js-vendor', 'concat']);
gulp.task('build', ['pug', 'sass', 'scripts', 'images']);
gulp.task('default', ['build', 'browsersync', 'watch']);
