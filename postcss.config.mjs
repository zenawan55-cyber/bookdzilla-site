import presetEnv from 'postcss-preset-env';

// Down-levels the stylesheet so older iPhones (Safari 12 and up) lay the site out correctly:
// logical properties become physical ones, clamp() and inset get fallbacks.
export default {
  plugins: [
    presetEnv({
      stage: 2,
      browsers: ['ios_saf >= 12', 'safari >= 12', 'chrome >= 80', 'firefox >= 78', 'edge >= 80'],
      features: { 'logical-properties-and-values': true, clamp: true, 'cascade-layers': false, 'custom-properties': false, 'is-pseudo-class': false, 'focus-visible-pseudo-class': false, 'has-pseudo-class': false, 'text-decoration-shorthand': false },
    }),
  ],
};
