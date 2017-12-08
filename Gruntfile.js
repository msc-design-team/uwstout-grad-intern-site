module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
    * Sass Task
    */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
        },
        files: {
          'styles/css/main.css':'styles/main.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'styles/css/main.css':'styles/main.scss'
        }
      }
    },
    /**
    * Autoprefixer
    */
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        // make sure src points to where main css file lives
        src: '*.css',
        dest: ''
      }
    },
    /**
    * Watch Task
    */
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
