'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['temp'],
        },

		loginJs : { files: { "build/output/login.js" : [
			"login/src/app/view/**/*.js",
			"login/src/**/*.js"
		]}},
        
        // Work on a copy of the files because they will be renamed during testing.
        concat: {
            aToB: {
                files: {
                    'test/fixtures/something.js':['test/fixtures/coelacanth.txt']
                }
            },
            bToA: {
                files: {
                    'test/fixtures/coelacanth.txt':['test/fixtures/something.js']
                }
            }
        },
        
        git_changedfiles : {
            
        },
        
        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js'],
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'concat:aToB', 'git_changedfiles', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};