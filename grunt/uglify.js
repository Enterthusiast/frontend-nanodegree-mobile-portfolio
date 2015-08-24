module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'js',
            src: ['**/*.js', '!*.min.js'],
            dest: '_prod/js',
            ext: '.js'
        },
        {
            expand: true,
            cwd: 'views/js',
            src: ['**/*.js', '!*.min.js'],
            dest: '_prod/views/js',
            ext: '.js'
        }
        ]
    }
};