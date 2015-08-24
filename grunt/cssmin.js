module.exports = {
	target: {
		files: [{
			expand: true,
			cwd: '',
			src: ['css/*.css', '!*.min.css'],
			dest: '_dist',
			ext: '.min.css'
		},
		{
			expand: true,
			cwd: '',
			src: ['views/css/*.css', '!*.min.css'],
			dest: '_dist',
			ext: '.min.css'
		}
		]
	}
}