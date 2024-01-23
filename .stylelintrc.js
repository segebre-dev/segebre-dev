/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'no-descending-specificity': null,
    'property-disallowed-list': ['font-size'],
    'declaration-property-value-allowed-list': [
      {
        '/(?=^[^-]{2}).*color/': '/var\\(--color|^inherit$/',
        '/(?=^[^-]{2}).*(?:gap|padding|margin)/': '/var\\(--spacing|^0/',
        '/^font$/': '/var\\(--font|^inherit$/',
      },
      {
        message:
          "Property '%s' has unexpected value '%s': value must be a corresponding variable from the design system.",
      },
    ],
  },
};

/**
 * -- declaration-property-value-allowed-list regex explanation --
 * Regex can be confusing, however, needed; Therefore here I break down the regex used.
 * ^[^-]{2}: We need to check that the start of the property `^` is not `[^]` 2 `{2}` dashes `-`
 * (?=^[^-]{2}): We use a look ahead `(?:)`, because not all of the properties start with `--` and we do not want to consume it when checked if it doesn't. E.g. `gap`, `color`
 * (?:gap|padding): We want to know if the keyword exists, and we don't care to save the group `(?:)`
 * (?=^[^-]{2}).*(?:gap|padding): Finally, we do not know if there is anything between the start and the keyword we are looking for
 */
