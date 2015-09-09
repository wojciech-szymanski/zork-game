module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['lib/data.js', 'js/src/controllers.js', 'js/src/*.js'],
        dest: 'js/main.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);

};