const config = {
	setupFilesAfterEnv: ['./jest.setup.ts'],
	modulePathIgnorePatterns: ['<rootDir>/src/e2e'],
	testEnvironment: 'jsdom',
};

export default config;
