
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
        <virnect-button  @click="toggleBtn">Default</virnect-button>
        <virnect-button  @click="toggleBtn" type="primary">Primary</virnect-button>
        <virnect-button  @click="toggleBtn" type="success">Success</virnect-button>
        <virnect-button  @click="toggleBtn" type="info">Info</virnect-button>
        <virnect-button  @click="toggleBtn" type="warning">Warning</virnect-button>
        <virnect-button  @click="toggleBtn" type="danger">Danger</virnect-button>
        <br>

        <br>
        <virnect-button  @click="toggleBtn" plain>Plain</virnect-button>
        <virnect-button  @click="toggleBtn" type="primary" plain>Primary</virnect-button>
        <virnect-button  @click="toggleBtn" type="success" plain>Success</virnect-button>
        <virnect-button  @click="toggleBtn" type="info" plain>Info</virnect-button>
        <virnect-button  @click="toggleBtn" type="warning" plain>Warning</virnect-button>
        <virnect-button  @click="toggleBtn" type="danger" plain>Danger</virnect-button>
        <br>

        <br>
        <virnect-button  @click="toggleBtn" round>Round</virnect-button>
        <virnect-button  @click="toggleBtn" type="primary" round>Primary</virnect-button>
        <virnect-button  @click="toggleBtn" type="success" round>Success</virnect-button>
        <virnect-button  @click="toggleBtn" type="info" round>Info</virnect-button>
        <virnect-button  @click="toggleBtn" type="warning" round>Warning</virnect-button>
        <virnect-button  @click="toggleBtn" type="danger" round>Danger</virnect-button>
        <br>

        <br>
        <virnect-button  @click="toggleBtn" icon="el-icon-search" circle></virnect-button>
        <virnect-button  @click="toggleBtn" type="primary" icon="el-icon-edit" circle></virnect-button>
        <virnect-button  @click="toggleBtn" type="success" icon="el-icon-check" circle></virnect-button>
        <virnect-button  @click="toggleBtn" type="info" icon="el-icon-message" circle></virnect-button>
        <virnect-button  @click="toggleBtn" type="warning" icon="el-icon-star-off" circle></virnect-button>
        <virnect-button  @click="toggleBtn" type="danger" icon="el-icon-delete" circle></virnect-button>
        <br>
        <br><br>
        <h2>Knobs</h2>
        <virnect-button  @click="toggleBtn" :type="type">{{text}}</virnect-button>
        <br><br>
        <br><br>
      </div>
      `,
      methods: {
        toggleBtn() {
          console.error("테스트 에러 ")
        }
      },
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