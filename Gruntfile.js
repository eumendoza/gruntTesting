module.exports = function(grunt){

	grunt.initConfig({

		jshint:{
			all:["script.js"]
		},
		concat:{
			dist:{
				src:["script.js","script1.js","script2.js"],
				dest:"scripts.js"
			}
		},
		uglify:{
			dist:{
				src:"scripts.js",
				dest:"scripts.min.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["jshint","concat","uglify"]);

};
