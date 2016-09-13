module.exports= function(grunt){
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		'min': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': ['js/night-mode.js'],
					'dest': 'js/app.js'
				}]
			}
		},

		'htmlmin': {                                     // Task
			dist: {                                      // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: {                                   // Dictionary of files
					'index.html': 'index-original.html',     // 'destination': 'source'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['min', 'htmlmin']);

}