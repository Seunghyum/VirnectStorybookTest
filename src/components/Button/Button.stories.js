// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectButton from "./src/button.vue"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Buttons', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectButton },
      template: /*html*/`
      <div style="text-align:center;">
        <h1>Buttons</h1>
        <br>
        <h2>Sample</h2>
        <br>
        <virnect-button>Default</virnect-button>
        <virnect-button type="primary">Primary</virnect-button>
        <virnect-button type="success">Success</virnect-button>
        <virnect-button type="info">Info</virnect-button>
        <virnect-button type="warning">Warning</virnect-button>
        <virnect-button type="danger">Danger</virnect-button>
        <br>

        <br>
        <virnect-button plain>Plain</virnect-button>
        <virnect-button type="primary" plain>Primary</virnect-button>
        <virnect-button type="success" plain>Success</virnect-button>
        <virnect-button type="info" plain>Info</virnect-button>
        <virnect-button type="warning" plain>Warning</virnect-button>
        <virnect-button type="danger" plain>Danger</virnect-button>
        <br>

        <br>
        <virnect-button round>Round</virnect-button>
        <virnect-button type="primary" round>Primary</virnect-button>
        <virnect-button type="success" round>Success</virnect-button>
        <virnect-button type="info" round>Info</virnect-button>
        <virnect-button type="warning" round>Warning</virnect-button>
        <virnect-button type="danger" round>Danger</virnect-button>
        <br>

        <br>
        <virnect-button icon="el-icon-search" circle></virnect-button>
        <virnect-button type="primary" icon="el-icon-edit" circle></virnect-button>
        <virnect-button type="success" icon="el-icon-check" circle></virnect-button>
        <virnect-button type="info" icon="el-icon-message" circle></virnect-button>
        <virnect-button type="warning" icon="el-icon-star-off" circle></virnect-button>
        <virnect-button type="danger" icon="el-icon-delete" circle></virnect-button>
        <br>
        <br><br>
        <h2>Knobs</h2>
        <virnect-button :type="type" :color="color" >{{text}}</virnect-button>
        <br><br>
        <br><br>
      </div>
      `,
      props: {
        text: {
          default: text('text', 'Play With ME')
        },
        type: {
          default: radios('Class Name', {
            primary: 'primary', 
            success: 'success', 
            info: 'info', 
            warning: 'warning', 
            danger: 'danger', 
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