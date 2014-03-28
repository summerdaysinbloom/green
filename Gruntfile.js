module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    keepalive: true,
                    base: '.'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'assets/style.min.css': [
                        'lib/css/normalize.css',
                        'lib/css/pure.min.css',
                        'style/compressed.css'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style/compressed.css' : 'sass/**/*.scss'

                }
            }
        },
        // uglify: {
        //     dev: {
        //         files: {
        //             'assets/output.min.js': ['lib/js/*.js']  
        //         }
        //     }
        // },
        watch: {
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: ['style/**/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    // Compile less task.
    grunt.registerTask('min', ['watch']);
    grunt.registerTask('default', ['connect']);
};