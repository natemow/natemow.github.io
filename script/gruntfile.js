module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dev: {
        src: ['../assets/js/app.js'],
        dest: '../assets/js/app.concat.js',
      }
    },
    uglify: {
      dev: {
        src: '../assets/js/app.concat.js',
        dest: '../assets/js/app.min.js'
      }
    },
    compass: {
      dev: {
        src: ['../assets/sass/*.scss'],
        dest: '../assets/css/styles.css',
        options: {
          outputStyle: 'compressed',
          relativeAssets: true
        }
      }
    },
    watch: {
      dev: {
        files: ['../assets/js/*.js', '../assets/sass/*.scss'],
        tasks: ['concat', 'uglify', 'compass'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
