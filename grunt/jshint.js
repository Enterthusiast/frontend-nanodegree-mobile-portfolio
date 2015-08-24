module.exports = {

    options: {
        reporter: require('jshint-stylish')
    },

    main: [
        'js/*.js',
        'views/js/*.js'
    ]
};