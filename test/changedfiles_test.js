'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.rev = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  custom_options: function(test) {
    
    test.ok( grunt.config.get('git.changed').indexOf('test/fixtures/coelacanth.txt') > -1 , 'Failed to detect .txt file changes');
    test.ok( grunt.config.get('git.changed.js').indexOf('test/fixtures/something.js') > -1 , 'Failed to detect .js file changes');

    test.done();
  }
};