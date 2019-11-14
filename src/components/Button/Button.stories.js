// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectButton from "./Button.vue"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Buttons', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectButton },
      template: `
      <div style="text-align:center;">
        <h1>Buttons</h1>
        <br>
        <h2>Sample</h2>
        <virnect-button  color="primary" type="filled">Primary</virnect-button>
        <virnect-button  color="success" type="filled">Success</virnect-button>
        <virnect-button  color="dark" type="filled">Dark</virnect-button>
        <virnect-button  color="rgb(134, 4, 98)" type="filled">Custom Color</virnect-button>
        <br><br>
        <br><br>
        <h2>Knobs</h2>
        <virnect-button :type="type" :color="color" >{{text}}</virnect-button>
      </div>
      `,
      props: {
        type: {
          default: radios('Type', {
            filled: 'filled',
            flat: 'flat',
            border: 'border',
          })
        },
        text: {
          default: text('text', 'Play With ME')
        },
        color: {
          default: radios('Class Name', {
            primary: 'primary',
            danger: 'danger',
            warning: 'warning',
          })
        }
      },
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)