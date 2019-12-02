import 'element-ui/lib/theme-chalk/index.css';
import { configure, addDecorator, addParameters  } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setConsoleOptions } from '@storybook/addon-console';
import virnectTheme from './theme/virnectTheme';
import locale from 'element-ui/lib/locale/lang/ko'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import koLocale from 'element-ui/lib/locale/lang/ko'

// Vue.use(VueI18n)
// Vue.config.lang = 'ko'
// Vue.locale('ko', koLocale)

const components = require.context('../packages', true, /\.stories.js$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

addParameters({
  options: {
    theme: virnectTheme
  },
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'dark', value: 'black' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  viewport: {
    name: 'Device',
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(() => ({
  template: '<story/>',
  i18n: locale,
  template: `<div style="margin-top:3rem;"><story/></div>`
}));

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

configure(loadStories, module)