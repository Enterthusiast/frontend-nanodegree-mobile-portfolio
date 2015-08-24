module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'js/*.js',
            'views/js/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },
/*
    styles: {
        files: [
            'src/styles/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
*/
};