

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'app',
		dist: 'dist',

        tag: {
            banner: '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' */\n'
        },

		sass: {
			options: {
                banner: '<%= tag.banner %>',
                style: 'expanded',
				includePaths: ['<%= app %>/bower_components/foundation/scss']
			},

			dist: {
				options: {
					style: 'compressed'
				},

				files: {
					'<%= app %>/css/app.css': '<%= app %>/scss/app.scss'
				}
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer-core')({browsers: 'last 1 version'}).postcss,
					require('csswring').postcss
				]
			},
			dist: {
				src: ['<%= dist %>/css/*.css', '<%= app %>/css/*.css']
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			all: [
				'Gruntfile.js',
				'<%= app %>/js/**/*.js'
			]
		},

		clean: {
			dist: {
				src: ['<%= dist %>/*']
			},
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['fonts/**', '**/*.html', '!**/*.scss', '!bower_components/**'],
					dest: '<%= dist %>/'
				} ]
			},
		},

		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= app %>/images/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: '<%= dist %>/images/'
				}]
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
				mangle: false
			}
		},

		useminPrepare: {
			html: ['<%= app %>/index.html'],

			options: {
				dest: '<%= dist %>'
			}
		},

		usemin: {
			html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
			css: ['<%= dist %>/css/**/*.css'],

			options: {
				dirs: ['<%= dist %>']
			}
		},

		htmlmin: {
			dist: {
			  	options: {
				  	removeComments: true,
			  		collapseWhitespace: true,
			  		preserveLineBreaks: false,
			  		minifyJS: true,
			  		minifyCSS: true,

				},

			  	files: {
				    'dist/index.html': 'app/index.html',
				}
			},
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['sass']
			},

			sass: {
				files: '<%= app %>/scss/**/*.scss',
				tasks: ['sass']
			},

			livereload: {
				files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
				options: {
					livereload: true
				}
			}
		},

		connect: {
			app: {
				options: {
					port: 9000,
					base: '<%= app %>/',
					open: true,
					livereload: true,
					hostname: '127.0.0.1'
				}
			},

			dist: {
				options: {
					port: 9001,
					base: '<%= dist %>/',
					open: true,
					keepalive: true,
					livereload: false,
					hostname: '127.0.0.1'
				}
			}
		},

		wiredep: {
			target: {
				src: [
					'<%= app %>/**/*.html'
				],

				exclude: [
					'modernizr',
					'jquery-placeholder',
					'foundation'
				]
			}
		}
	});
	
	grunt.registerTask('compile-sass', 		['sass']);
	grunt.registerTask('bower-install', 	['wiredep']);
	grunt.registerTask('default', 			['compile-sass', 'bower-install', 'connect:app', 'watch']);
	grunt.registerTask('validate-js', 		['jshint']);
	grunt.registerTask('server-dist', 		['connect:dist']);
	grunt.registerTask('publish', 			['compile-sass', 'postcss', 'clean:dist', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin', 'htmlmin']);
};

