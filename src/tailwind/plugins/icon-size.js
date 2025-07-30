const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'icon-size': (value) => ({
          width: value,
          height: value,
          minWidth: value,
          minHeight: value,
          fontSize: value,
          lineHeight: value,
          [`svg`]: {
            width: value,
            height: value,
          },
        }),
      },
      {
        values: theme('iconSize'),
      }
    );
  },
  {
    theme: {
      iconSize: {
        3: '0.675rem',
        3.5: '0.7875rem',
        4: '0.9rem',
        4.5: '1.0125rem',
        5: '1.125rem',
        6: '1.35rem',
        7: '1.575rem',
        8: '1.8rem',
        10: '2.25rem',
        12: '2.7rem',
        14: '3.15rem',
        16: '3.6rem',
        18: '4.05rem',
        20: '4.5rem',
        22: '4.95rem',
        24: '5.4rem',
      },
    },
  }
);
