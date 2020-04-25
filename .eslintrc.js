module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true
      }
    }
  ]
}
