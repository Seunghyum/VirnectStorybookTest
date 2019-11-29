import 'element-ui/lib/theme-chalk/index.css';
import { configure, addDecorator, addParameters  } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setConsoleOptions } from '@storybook/addon-console';
import virnectTheme from './theme/virnectTheme';

const components = require.context('../src/components', true, /\.stories.js$/);

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
});

addParameters({
  viewport: {
    name: 'Device',
    viewports: INITIAL_VIEWPORTS,
  },
});

var decoratorVueTemplate = () => { return { template: `<div style="margin-top:3rem;"><story/></div>` }}
addDecorator(decoratorVueTemplate)

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

configure(loadStories, module)