module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        files: {
          "dist/index.html": "src/index.html",
        },
      },
    },
  });

  // Load the plugin that provides tasks.
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  // Default task(s).
  grunt.registerTask("default", ["htmlmin"]);
};
