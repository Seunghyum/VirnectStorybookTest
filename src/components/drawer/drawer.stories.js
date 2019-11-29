
import { storiesOf } from '@storybook/vue';
import VirnectDrawer from "./src/main.vue"
import VirnectButton from "../button"
import VirnectRadio from "../radio"
import VirnectRadioGroup from "../radio-group"
import VirnectMessageBox from "../message-box"
// import VirnectTable from "../table"
// import VirnectTableColumn from "../table-column"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Drawer', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectDrawer, VirnectButton, VirnectRadio, VirnectRadioGroup },
      template: /*html*/`
      <div class="container">
        <virnect-radio-group v-model="direction">
          <virnect-radio label="ltr">left to right</virnect-radio>
          <virnect-radio label="rtl">right to left</virnect-radio>
          <virnect-radio label="ttb">top to bottom</virnect-radio>
          <virnect-radio label="btt">bottom to top</virnect-radio>
        </virnect-radio-group>
        <virnect-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          open
        </virnect-button>

        <virnect-drawer
          title="I am the title"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
          <span>Hi, there!</span>
        </virnect-drawer>
      </div>
      `,
      mounted() {
        this.$confirm = VirnectMessageBox.confirm;
      },
      data() {
        return {
          drawer: false,
          direction: 'rtl',
        };
      },
      methods: {
        handleClose(done) {
          this.$confirm('Are you sure you want to close this?')
            .then(_ => {
              done();
            })
            .catch(_ => {});
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
  'Custom', 
  () => {
    return {
      components: { VirnectDrawer, VirnectButton, VirnectRadio, VirnectRadioGroup },
      template: /*html*/`
      <div class="container">
        <virnect-button type="text" @click="table = true">Open Drawer with nested table</virnect-button>
        <virnect-button type="text" @click="dialog = true">Open Drawer with nested form</virnect-button>
        <virnect-drawer
          title="I have a nested table inside!"
          :visible.sync="table"
          direction="rtl"
          size="50%">
        </virnect-drawer>
        
        <virnect-drawer
          title="I have a nested form inside!"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="ltr"
          custom-class="demo-drawer"
          ref="drawer"
          >
          <div class="demo-drawer__content">
            <virnect-form :model="form">
              <virnect-form-item label="Name" :labvirnect-width="formLabelWidth">
                <virnect-input v-model="form.name" autocomplete="off"></virnect-input>
              </virnect-form-item>
              <virnect-form-item label="Area" :labvirnect-width="formLabelWidth">
                <virnect-select v-model="form.region" placeholder="Please select activity area">
                  <virnect-option label="Area1" value="shanghai"></virnect-option>
                  <virnect-option label="Area2" value="beijing"></virnect-option>
                </virnect-select>
              </virnect-form-item>
            </virnect-form>
            <div class="demo-drawer__footer">
              <virnect-button @click="cancelForm">Cancel</virnect-button>
              <virnect-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? 'Submitting ...' : 'Submit' }}</virnect-button>
            </div>
          </div>
        </virnect-drawer>
      </div>
      `,
      mounted() {
        this.$confirm = VirnectMessageBox.confirm;
      },
      data() {
        return {
          table: false,
          dialog: false,
          loading: false,
          gridData: [{
            date: '2016-05-02',
            name: 'Peter Parker',
            address: 'Queens, New York City'
          }, {
            date: '2016-05-04',
            name: 'Peter Parker',
            address: 'Queens, New York City'
          }, {
            date: '2016-05-01',
            name: 'Peter Parker',
            address: 'Queens, New York City'
          }, {
            date: '2016-05-03',
            name: 'Peter Parker',
            address: 'Queens, New York City'
          }],
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '80px',
          timer: null,
        };
      },
      methods: {
        handleClose(done) {
          if (this.loading) {
            return;
          }
          this.$confirm('Do you want to submit?')
            .then(_ => {
              this.loading = true;
              this.timer = setTimeout(() => {
                done();
                // animation takes time
                setTimeout(() => {
                  this.loading = false;
                }, 400);
              }, 2000);
            })
            .catch(_ => {});
        },
        cancelForm() {
          this.loading = false;
          this.dialog = false;
          clearTimeout(this.timer);
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