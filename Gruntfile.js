module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dev: ["build"],
      prod: ["build"]
    },

    copy: {
      main: {
        src: ['css/**', 'fonts/**', 'js/**', 'slick/**', 'images/**'],
        dest: 'build/',
      },
    },

    includes: {
      build: {
        cwd: '.',
        src: ['*.html'],
        dest: 'build/',
        debug: true,
        options: {
          flatten: true,
          includePath: 'partials/'
        }
      }
    },

    watch: {
      scripts: {
        files: ['*.html', 'css/*', 'js/*', 'partials/*'],
        tasks: ['default'],
        options: {
          interrupt: true,
          spawn:false,
          livereload: true
        },
      },
    },

    imagemin: {                          // Task
      dynamic: {
        options: {                       // Target options
          optimizationLevel: 7,
          progressive: true
      },                         // Another target
      files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,jpeg,JPG}'],   // Actual patterns to match
          dest: 'build/images'                  // Destination path prefix
        }]
      }
    }

  });

grunt.loadNpmTasks('grunt-includes');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks( "grunt-bake" );

  // Default task(s) : use this for development work.
  grunt.registerTask('default', ['clean:dev', 'copy', 'includes', 'watch']);


  // Prod task(s) : use this before uploading to prod.
  // Minifies images.
  grunt.registerTask('prod', ['clean:prod', 'imagemin', 'copy', 'includes']);
};