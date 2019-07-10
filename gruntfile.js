module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        // Copy dir and files 
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "./src/",
                        src: [".sequelizerc"],
                        dest: "./dist/"
                    }
                ]
            }
        },
        // Compile ts files and copy them on dist folder
        ts: {
            app: {
                files: [{
                    src: ["src/\*\*/\*.ts", "src/\*\*/\*.js", "!src/.baseDir.ts"],
                    dest: "./dist"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false,
                    rootDir: "src",
                    allowJs: true,
                    listFiles: false,
                    esModuleInterop: true
                }
            }
        },
        // Watch file changes and reboot the server
        watch: {
            ts: {
                files: ["src/\*\*/\*.ts"],
                tasks: ["ts", "shell"]
            }
        },
        // Start the node server using compiled js files
        shell: {
            options: {
                stderr: true
            },
            target: {
                command: 'node ./dist/server/server.js'
            },
            another: 'node ./dist/server/server.js' // Shorthand
        },
        // Run concurrent commands
        concurrent: {
            concurrent_tasks: {
                tasks: ['watch', 'shell'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
    });

    // Load NPM Tasks
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-ts")
    grunt.loadNpmTasks('grunt-shell')
    grunt.loadNpmTasks("grunt-concurrent")

    grunt.registerTask("default", [
        "ts",
        "copy",
        "concurrent:concurrent_tasks"
    ]);

    grunt.registerTask("build", [
        "ts",
        "copy"
    ]);
};