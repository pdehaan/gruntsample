#!/usr/bin/env node

module.exports = function (grunt) {
  grunt.config("copyright", {
    "app": {
      "options": {
        "pattern": /copyright \d{4}/i
      },
      "src": [
        "**/*.js",
        "!gruntTasks/**",
        "<%= grunt.config('excludes') %>"
      ]
    }
  });

  grunt.registerMultiTask("copyright", "Checking for copyrights in files", function () {
    var pattern = this.options().pattern;
    var files = this.filesSrc;

    files = files.filter(function (file) {
      return grunt.file.isFile(file);
    }).filter(function (file) {
      var txt = grunt.file.read(file, "utf8");
      return !txt.match(pattern);
    });
    if (files.length) {
      grunt.log.subhead("The following files don't match the specified pattern: %s", pattern);
      files.forEach(function (file) {
        grunt.log.writeln("- %s", file);
      });
      return false;
    }
  });
};
