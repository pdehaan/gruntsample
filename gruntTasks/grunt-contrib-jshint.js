#!/usr/bin/env node

module.exports = function (grunt) {
  var reporter = require("jshint-stylish");

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.config("jshint", {
    "app": {
      "options": {
        "jshintrc": ".jshintrc",
        "reporter": reporter
      },
      "src": [
        "**/*.{js,json}",
        ".jshintrc",

        "<%= grunt.config('excludes') %>"
      ]
    }
  });
};
