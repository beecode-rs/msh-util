const sharedConfig = require('./jest.config.js')

module.exports = {
	...sharedConfig,
	extends: 'jest.config.js',
	testPathIgnorePatterns: [...sharedConfig.testPathIgnorePatterns, '/__tests__/'],
}
