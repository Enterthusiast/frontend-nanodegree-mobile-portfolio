module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '',
            src: ['img/*.{png,jpg,gif}'],
            dest: '_prod/'
        },
        {
            expand: true,
            cwd: '',
            src: ['views/images/*.{png,jpg,gif}'],
            dest: '_prod/'
        }
        ]
    }
};