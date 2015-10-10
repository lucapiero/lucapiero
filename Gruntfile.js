(function () {
	'use strict';

	module.exports = function(grunt) {

	    require('load-grunt-tasks')(grunt);

		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-htmlmin');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-concat');
	    grunt.loadNpmTasks('grunt-postcss');

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			app: 'app',
			dist: 'dist',

	        tag: {
	            banner: '/*!\n' +
	                ' * <%= pkg.name %>\n' +
	                ' * - - - - - - - - - - - - - - - ' +
	                ' * @author <%= pkg.author %>\n' +
	                ' * @version <%= pkg.version %>\n' +
	                ' */\n'
	        },

			sass: {
				options: {
	                banner: '<%= tag.banner %>',
	                style: 'expanded',
					includePaths: ['<%= app %>/libs/foundation/scss']
				},

				dist: {
					options: {
						style: 'compressed'
					},

					files: {
						'<%= app %>/assets/css/app.css': '<%= app %>/assets/scss/app.scss'
					}
				}
			},

			postcss: {
				options: {
					map: true,
					processors: [
						require('autoprefixer-core')({browsers: 'last 1 version'})
					]
				},
				dist: {
					src: ['<%= dist %>/css/*.css', '<%= app %>/assets/css/*.css']
				}
			},

			jshint: {
				options: {
					jshintrc: '.jshintrc'
				},

				all: [
					'Gruntfile.js',
					'<%= app %>/**/*.js'
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
						cwd: '<%= app %>',
						src: ['assets/css/**', 'templates/**', 'data/**', 'models/**', 'views/**', 'utils/**', '!libs/**'],
						dest: '<%= dist %>/'
					} ]
				},
			},

			imagemin: {
				target: {
					files: [{
						expand: true,
						cwd: '<%= app %>/assets/images/',
						src: ['**/*.{jpg,gif,svg,jpeg,png}'],
						dest: '<%= dist %>/assets/images/'
					}]
				}
			},

			uglify: {
				options: {
					preserveComments: 'some',
					mangle: false
				},
				files: {
					'<%= dist %>/built.js': ['<%= app %>/*.js', '<%= app %>/models/*.js', '<%= app %>/views/*.js', '<%= app %>/utils/*.js']
				}
			},

			useminPrepare: {
				html: ['<%= app %>/index.html'],

				options: {
					dest: '<%= dist %>'
				}
			},

			usemin: {
				html: ['<%= dist %>/**/*.html', '!<%= app %>/libs/**'],
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
				  		minifyCSS: true
					},

				  	files: {
					    '<%= dist %>/index.html': '<%= app %>/index.html'
					}
				},
			},

			cssmin: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1
				},
				target: {
					files: {
						'<%= dist %>/assets/css/app.min.css': '<%= app %>/assets/css/app.css'
					}
				}
			},

			watch: {
				grunt: {
					files: ['Gruntfile.js'],
					tasks: ['sass']
				},

				sass: {
					files: '<%= app %>/assets/scss/**/*.scss',
					tasks: ['sass']
				},

				css: {
					files: '<%= app %>/assets/css/app.css',
					options: {
						livereload: true
					}
				},

				html: {
					files: ['<%= app %>/**/*.html', '!<%= app %>/libs/**'],
					options: {
						livereload: true
					}
				},

				js: {
					files: ['<%= app %>/**/*.js', '!<%= app %>/libs/**'],
					options: {
						livereload: true
					}
				},

				livereload: {
					files: ['<%= app %>/templates/**/*.html', '<%= app %>/**/*.js', '!<%= app %>/libs/**', '<%= app %>/assets/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
					options: {
						livereload: true
					}
				}
			},

			concat: {
				options: {
					separator: ';'
				},
				dist: {
					src: ['<%= app %>/**/*.js', '!<%= app %>/libs/**'],
					dest: 'dist/built.js'
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
		grunt.registerTask('publish', 			['compile-sass', 'postcss', 'cssmin', 'clean:dist', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin', 'htmlmin']);
	};
})();
