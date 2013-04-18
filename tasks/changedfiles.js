'use strict';

/*global require,module*/
var grunt = require('grunt');

module.exports = function (grunt) {
    grunt.registerTask('git_changedfiles', 'get a list of changed local files from Git and set them as a property', function() {
        var done = this.async();
        grunt.util.spawn({
            cmd: 'git',
            args: ['diff', '--name-only', '--diff-filter=ACM'] // '--cached', 
        }, function(error, result){
            
            var changedFiles = String(result).split(grunt.util.linefeed);
            console.log(result);
            grunt.config.set('git.changed', changedFiles);
            grunt.config.set('git.changed.js', changedFiles.filter(function(element) {
                return (/\.js/).test(element);
            }));
            /*
            var asTests = changedFiles.map(function(val) {
                var split = val.split('/'),
                    outputPath = split[0] + '/tests/specs/*.';
                if (/tests/.test(split[1])) {
                    return val;
                } else if (/app/.test(split[1])) {
                    return outputPath + split.slice(2).join('.');
                } else {
                    return '';
                }
            });

            grunt.config.set('git.tests.changed', asTests.filter(function(element) {
                return element !== '';
            }));
*/
            grunt.log.writeln("changed files:           " + grunt.config.process('<%= git.changed %>').join(', '));
            grunt.log.writeln("changed JS files:        " + grunt.config.process('<%= git.changed.js %>').join(', '));
//            grunt.log.writeln("matching tests to run:   " + grunt.config.process('<%= git.tests.changed %>').join(', '));

            done();
        });
    });

};
