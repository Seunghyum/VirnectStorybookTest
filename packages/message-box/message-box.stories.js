
import { storiesOf } from '@storybook/vue';
import VirnectMessageBox from "./"
import VirnectMessage from "../message"
import VirnectButton from "../button"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';

const storysof = storiesOf('MessageBox', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Alert', 
  () => {
    return {
      components: { VirnectButton},
      template: /*html*/`
      <div style="text-align:center;">
        <h1>MessageBox</h1>
        <br>
        <h2>Alert</h2>
        <p>Alert interrupts user operation until the user confirms.</p>
        <virnect-button type="info" @click="alert">Click to alert the Message Box</virnect-button>
      </div>
      `,
      mounted() {
        this.$message = VirnectMessage;
        this.$alert = VirnectMessageBox.alert;
      },
      methods: {
        alert() {
          this.$alert('This is a message', 'Title', {
            confirmButtonText: 'OK',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        },
      }
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)

storysof.add(
  'Confirm', 
  () => {
    return {
      components: { VirnectButton},
      template: /*html*/`
      <div style="text-align:center;">
        <h1>MessageBox</h1>
        <br>
        <h2>Confirm</h2>
        <p>Confirm is used to ask users' confirmation.</p>
        <virnect-button type="primary" @click="confirm">Click to confirm the Message Box</virnect-button>
       
      </div>
      `,
      mounted() {
        this.$confirm = VirnectMessageBox.confirm;
        this.$message = VirnectMessage;
      },
      methods: {
        confirm() {
          this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          })
          .then(() => {
            this.$message({
              type: 'success',
              message: 'Delete completed'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Delete canceled'
            });          
          });
        }
      }
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)

storysof.add(
  'Loading after confirm', 
  () => {
    return {
      components: { VirnectButton},
      template: /*html*/`
      <div style="text-align:center;">
        <h1>MessageBox</h1>
        <br>
        <h2>Loading after confirm</h2>
        <p>Loading 3 sec after confirm</p>
        <virnect-button type="primary" @click="load">Click to confirm the Message Box</virnect-button>
       
      </div>
      `,
      mounted() {
        this.$msgbox = VirnectMessageBox;
      },
      methods: {
        load() {
          const h = this.$createElement;
          this.$msgbox({
            title: 'Message',
            message: h('p', null, [
              h('span', null, 'Message can be '),
              h('i', { style: 'color: teal' }, 'VNode')
            ]),
            showCancelButton: true,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = 'Loading...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          });
        },
      }
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)