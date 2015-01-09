module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ["build"]
    },
    copy: {
      main: {
        src: ['css/**', 'fonts/**', 'js/**', 'slick/**'],
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
        files: '*.html',
        tasks: ['default'],
        options: {
          interrupt: true,
          spawn:false,
          livereload: true
        },
      },
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
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

  // Default task(s).
  grunt.registerTask('default', ['clean', 'imagemin', 'copy', 'includes', 'watch']);
};