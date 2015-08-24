module.exports = {
	target: {
		files: [{
			expand: true,
			cwd: '',
			src: ['css/*.css', '!*.min.css'],
			dest: '_prod',
			ext: '.css'
		},
		{
			expand: true,
			cwd: '',
			src: ['views/css/*.css', '!*.min.css'],
			dest: '_prod',
			ext: '.css'
		}
		]
	}
}