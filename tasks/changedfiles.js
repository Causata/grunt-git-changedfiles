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
            
            grunt.config.set('git.changed', changedFiles);

            grunt.verbose.writeln("changed files:           " + grunt.config.process('<%= git.changed %>').join(', '));

            done();
        });
    });

};
