module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-inline');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/perfmatters.js' ,
                dest: 'js/perfmatters.min.js'
            }
        },

        cssmin: {
          target: {
              src: 'css/style.css',
              dest: 'css/style.min.css',
            }
        },

        inline: {
          dist: {
            src: 'src/index.html',
          
          }
        }
    });

    grunt.registerTask('default', ['uglify, cssmin, inline']);

};


//https://24ways.org/2013/grunt-is-not-weird-and-hard#fn4987692805470b0b5865df-2
