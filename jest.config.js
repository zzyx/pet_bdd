module.exports = {
    // [...]
    // Replace `ts-jest` with the preset you want to use
    // from the above list
    preset: 'ts-jest/presets/js-with-ts',

    testMatch: ['**/*.steps.ts'],

    modulePaths: ['<rootDir>'],
};
