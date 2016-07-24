module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    files: [
      'main.js',
      'tests/*.js'
    ]
  })
}
