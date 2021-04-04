module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/', '/src/'],
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  collectCoverageFrom: ['packages/**/*.{js,jsx,vue}', 'scripts/**/*.{js,ts}'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
}
