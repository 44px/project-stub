module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'arrow-body-style': ['error', 'as-needed', {requireReturnForObjectLiteral: true}],
    'func-names': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', {singleQuote: true, trailingComma: 'es5'}],
  },
};
