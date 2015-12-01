module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //uglify: {
            // 2. Configuration for concatinating files goes here.
        //}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify']);

};

uglify: {
    build: {
        src: 'js/perfmatters.js' ,
        dest: 'js/perfmatters.min.js'
    }
}

//https://24ways.org/2013/grunt-is-not-weird-and-hard#fn4987692805470b0b5865df-2
