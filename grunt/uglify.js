module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'js',
            src: ['**/*.js', '!*.min.js'],
            dest: '_dist/js',
            ext: '.min.js'
        },
        {
            expand: true,
            cwd: 'views/js',
            src: ['**/*.js', '!*.min.js'],
            dest: '_dist/views/js',
            ext: '.min.js'
        }
        ]
    }
};