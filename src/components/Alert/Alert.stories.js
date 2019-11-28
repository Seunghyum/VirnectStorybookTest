// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectAlert from "./src/main.vue"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Alerts', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectAlert },
      template: /*html*/`
      <div class="container">
        <h2>Alerts</h2>
        <div class="row">
          <div class="col-6">
            <h2>Samples</h2>
            <br>
            <template>
              <virnect-alert
                title="success alert"
                type="success">
              </virnect-alert>
              <br>
              <virnect-alert
                title="info alert"
                type="info">
              </virnect-alert>
              <br>
              <virnect-alert
                title="warning alert"
                type="warning">
              </virnect-alert>
              <br>
              <virnect-alert
                title="error alert"
                type="error">
              </virnect-alert>
            </template>
          </div>  
          <div class="col-6">
            <h2>Knobs</h2>
            <br>
            <virnect-alert :title="title" :type="type" :width='width' >{{body}}</virnect-alert>
          </div>
        </div>
      </div>
      `,
      props: {
        title: {
          default: text('Title', 'Play With ME')
        },
        width: {
          default: text('Width', '100%')
        },
        body: {
          default: text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
        },
        type: {
          default: radios('Class Name', {
            primary: 'info',
            success: 'success',
            danger: 'error',
            warning: 'warning',
          })
        },
      },
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)