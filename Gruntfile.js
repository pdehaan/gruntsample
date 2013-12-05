#!/usr/bin/env node

module.exports = function (grunt) {
  grunt.initConfig({
    "pkg": grunt.file.readJSON("package.json"),
    "excludes": [
      "!node_modules/**"
    ]
  });

  grunt.loadTasks("gruntTasks");

  grunt.registerTask("default", ["jshint", "jsonlint", "copyright"]);
};
