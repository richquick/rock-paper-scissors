module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            all: {
                src: [
                    'src/**/*.js',
                ],
                options: {
                    'vendor': 'lib/**/*.js',
                    'specs': 'spec/**/*.js'
                }
            }
        }
    }); 
    grunt.loadNpmTasks('grunt-contrib-jasmine');
};