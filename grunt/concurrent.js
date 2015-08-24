module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'uglify'
    ],
    prodThird: [
        'cssmin'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};