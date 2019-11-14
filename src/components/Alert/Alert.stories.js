// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectAlert from "./Alert.vue"
import description from './description.md';
import { withKnobs, text, radios, boolean   } from '@storybook/addon-knobs';


const storysof = storiesOf('Alerts', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectAlert },
      template: `
      <div class="container">
        <h2>Alerts</h2>
        <div class="row">
          <div class="col-6">
            <h2>Samples</h2>
            <br>
            <virnect-alert 
              color="primary"
              title="Primary" active="true">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </virnect-alert>
            <br>
            <virnect-alert title="Success" active="true" color="success">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </virnect-alert>
            <br>
            <virnect-alert title="Danger" active="true" color="danger">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </virnect-alert>
            <br>
            <virnect-alert title="Danger" active="true" color="warning">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </virnect-alert>
            <br>
            <virnect-alert title="Dark" active="true" color="dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </virnect-alert>
            <br>
            <virnect-alert title="RGB" active="true" color="rgb(41, 147, 138)">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </virnect-alert>
            <br>
            <virnect-alert title="HEX" active="true" color="#842993">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </virnect-alert>
          </div>  
          <div class="col-6">
            <h2>Knobs</h2>
            <br>
            <virnect-alert :title="title" active="isActive" :type="type" :color="color" >{{body}}</virnect-alert>
          </div>
        </div>
      </div>
      `,
      props: {
        title: {
          default: text('Title', 'Play With ME')
        },
        body: {
          default: text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
        },
        color: {
          default: radios('Class Name', {
            primary: 'primary',
            success: 'success',
            danger: 'danger',
            warning: 'warning',
            dark: 'dark',
          })
        },
        isActive: {
          default: {
            default: boolean('isActive', true)
          }
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