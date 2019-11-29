import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: '#6303F6',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#2E1A5A',
  appContentBg: '#251F33',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: '#6303F6',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Virnect UI',
  brandUrl: 'https://virnect.com',
  brandImage: 'http://www.codecplus.com/upload/img/recruite/recruite_20180508060046.png',
  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: 'black',
  },
});
