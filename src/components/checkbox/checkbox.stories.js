
import { storiesOf } from '@storybook/vue';
import VirnectCheckbox from "./src/checkbox.vue"
import VirnectCheckboxButton from "./src/checkbox-button.vue"
import VirnectCheckboxGroup from "./src/checkbox-group.vue"
import VirnectCol from "../col/src/col"
import description from './description.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Checkbox', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectCheckbox, VirnectCol },
      template: /*html*/`
      <div style="margin: auto; width: 800px;">
        <h1>Checkbox</h1>
        <br>
        <virnect-col :span="8">
          <h2>Default</h2>
          <br>
          <virnect-checkbox>Option</virnect-checkbox>
        </virnect-col>
        
        <virnect-col :span="8">
          <h2>Checked</h2>
          <br>
          <virnect-checkbox checked>Option</virnect-checkbox>
        </virnect-col>

        
        <virnect-col :span="8">
          <h2>Disabled</h2>
          <br>
          <virnect-checkbox disabled>Option</virnect-checkbox>
        </virnect-col>
      </div>
      `,
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)

storysof.add(
  'Button Style', 
  () => {
    return {
      components: { VirnectCheckbox, VirnectCheckboxButton, VirnectCheckboxGroup },
      template: /*html*/`
      <div style="text-align: center; width: 800px;">
        <div>
          <virnect-checkbox-group v-model="checkboxGroup1">
            <virnect-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</virnect-checkbox-button>
          </virnect-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox-group v-model="checkboxGroup2" size="medium">
            <virnect-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</virnect-checkbox-button>
          </virnect-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox-group v-model="checkboxGroup3" size="small">
            <virnect-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</virnect-checkbox-button>
          </virnect-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <virnect-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</virnect-checkbox-button>
          </virnect-checkbox-group>
        </div>
      </div>
      `,
      data () {
        return {
          checkboxGroup1: ['Shanghai'],
          checkboxGroup2: ['Shanghai'],
          checkboxGroup3: ['Shanghai'],
          checkboxGroup4: ['Shanghai'],
          cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
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
  'With borders', 
  () => {
    return {
      components: { VirnectCheckbox},
      template: /*html*/`
      <div style="text-align: center; width: 800px;">
        <div>
          <virnect-checkbox v-model="checked1" label="Option1" border></virnect-checkbox>
          <virnect-checkbox v-model="checked2" label="Option2" border></virnect-checkbox>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox v-model="checked3" label="Option1" border size="medium"></virnect-checkbox>
          <virnect-checkbox v-model="checked4" label="Option2" border size="medium"></virnect-checkbox>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox-group v-model="checkboxGroup1" size="small">
            <virnect-checkbox label="Option1" border></virnect-checkbox>
            <virnect-checkbox label="Option2" border disabled></virnect-checkbox>
          </virnect-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <virnect-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
            <virnect-checkbox label="Option1" border></virnect-checkbox>
            <virnect-checkbox label="Option2" border></virnect-checkbox>
          </virnect-checkbox-group>
        </div>
      </div>
      `,
      data () {
        return {
          checked1: true,
          checked2: false,
          checked3: false,
          checked4: true,
          checkboxGroup1: [],
          checkboxGroup2: []
        };
      }
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)
