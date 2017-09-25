import gulp from 'gulp';
import plumber from 'gulp-plumber';

// CSS
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-easy-import';
import postcssUrl from 'postcss-url';
import postcssNested from 'postcss-nested';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssCalc from 'postcss-calc';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPseudoelements from 'postcss-pseudoelements';
import autoprefixer from 'autoprefixer';
import cssmin from 'gulp-cssmin';

// JS
import babel from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import exit from 'gulp-exit';
import source from 'vinyl-source-stream';
import watchify from 'watchify';
import uglify from 'gulp-uglify';

// LINT
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';

// GH-PAGES
import ghPages from 'gulp-gh-pages';

const dirs = {
  src: 'src/',
  dest: 'lib/'
};

const main = {
  css: 'index.css',
  js: 'index.js'
}

const globs = {
  css: [
    dirs.src + 'components/**/*.css',
    dirs.src + 'css/**/*.css',
    dirs.src + main.css,
  ],
  js: [
    dirs.src + 'components/**/*.js',
    dirs.src + 'js/**/*.js',
    dirs.src + main.js,
  ],
};

// Build
gulp.task('build:css', () => {
  return gulp.src(dirs.src + main.css)
    .pipe(postcss([
      postcssImport({ glob: true }),
      postcssUrl(),
      postcssNested(),
      postcssCalc(),
      postcssColorFunction(),
      postcssCustomMedia(),
      postcssPseudoelements(),
      autoprefixer()
    ]))
    .pipe(cssmin())
    .pipe(gulp.dest(dirs.dest));
});

function compileJS(flag) {
  const bundler = watchify(browserify(dirs.src + main.js, { debug: true }).transform(babel));

  function rebundle() {
    return bundler
      .bundle()
      .pipe(plumber())
      .pipe(source(main.js))
      .pipe(buffer())
      .pipe(gulp.dest(dirs.dest));
  }

  if (flag) {
    bundler.on('update', (ids) => {
      console.log(`Changed: ${ids}`);
      rebundle();
    });
    bundler.on('log', (msg) => {
      const date = new Date(Date.now());
      // const time = date.toTimeString();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      console.log(`${time} -> ${msg}`);
    });

    rebundle();
  } else {
    rebundle().pipe(exit()); // REVIEW
  }
}

gulp.task('build:js', () => compileJS());

gulp.task('build', ['build:css', 'build:js']);

// Lint
gulp.task('lint:css', () => {
  return gulp.src(globs.css)
  .pipe(plumber())
  .pipe(stylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
});

gulp.task('lint:js', () => gulp.src(globs.js)
  .pipe(plumber())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('lint', ['lint:css', 'lint:js']);

// Watch
gulp.task('watch:css', () => gulp.watch(globs.css, ['build:css']));

gulp.task('watch:js', () => compileJS(true));

gulp.task('watch', ['watch:css', 'watch:js']);

gulp.task('deploy', () => {
  return gulp.src('./_site/**/*')
    .pipe(ghPages());
});
