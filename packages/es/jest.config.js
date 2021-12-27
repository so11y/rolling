module.exports = {
	rootDir: __dirname,
	testEnvironment: 'node',
	testMatch: ['<rootDir>/src/__tests__/**/*.(ts|js)'],
	transform: {
		'^.+\\.tsx?$': '@sucrase/jest-plugin'
	}
};
