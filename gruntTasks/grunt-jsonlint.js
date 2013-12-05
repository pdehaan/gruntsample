#!/usr/bin/env node

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-jsonlint");
  grunt.config("jsonlint", {
    "app": {
      "src": [
        "**/*.json",
        ".jshintrc",
        "<%= grunt.config('excludes') %>"
      ]
    }
  });
};