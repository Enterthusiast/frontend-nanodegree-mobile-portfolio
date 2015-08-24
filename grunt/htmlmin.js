module.exports = {
   dist: {
      options: {
         removeComments: true,
         collapseWhitespace: true
      },
      files: [{
         expand: true,
         cwd: '',
         src: '*.html',
         dest: '_prod/'
      },
      {
         expand: true,
         cwd: '',
         src: 'views/*.html',
         dest: '_prod/'
      }
      ]
   }
}