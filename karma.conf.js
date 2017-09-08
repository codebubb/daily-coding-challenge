module.exports = function(config){
    config.set({
        reporters: ['progress', 'kjhtml'],
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'spec/*.spec.js': [ 'browserify' ] 
        },
        plugins: [
            'karma-browserify',
            'karma-jasmine',
            'karma-jasmine-html-reporter'
        ],
        files: [
            'spec/*.spec.js'
        ]
    });
}