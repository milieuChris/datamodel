/*
 * grunt-typson
 *
 *
 * Copyright (c) 2014 Martin Berg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('typson', 'Grunt task for typson, generating json schema from typescript', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			punctuation: '.',
			separator: ', '
		});

		var typson = require('typson/lib/typson-schema');
		var done = this.async();
		// Iterate over all specified file groups.
		var fileCount = this.files.length;
		var togo = fileCount;
		this.files.forEach(function(f) {

			//grunt.log.writeln("Found file: " + f.src[0]);

			typson.definitions(f.src[0])
			.then(function(tree) {
				//grunt.log.writeln("Writing schema " + tree + " for " + f.dest);
				var schema = JSON.stringify(tree, undefined, 2);
				grunt.file.write(f.dest, schema);
				togo--;
				if (togo===0) {
					grunt.log.writeln("Compiled " + fileCount + " schema files ").ok();
					done();
				}
			})

			.catch(function(e){
				grunt.fail.warn("Error compiling schema: " + e);
			})
		});
	});

};
