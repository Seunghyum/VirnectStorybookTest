import '../src/utils/simple-grid.min.css'
import { configure, addDecorator, addParameters  } from '@storybook/vue';

const components = require.context('../src/components', true, /\.stories.js$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

addParameters({
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'dark', value: 'black' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

var decoratorVueTemplate = () => { return { template: `<div style="margin-top:3rem;"><story/></div>` }}
addDecorator(decoratorVueTemplate)

configure(loadStories, module)