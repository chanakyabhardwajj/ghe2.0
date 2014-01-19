'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            styles: {
                files: ['css/style.css'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/script.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['*.html', 'partials/**/*.html'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: ['js/script.js']
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'imagesRaw/home/gallery',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/home/gallery/'
                }]
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'watch']);

};