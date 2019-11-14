// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectProgressBar from "./ProgressBar.vue"
import description from './description.md';

const storysof = storiesOf('Progress Bar', module)

storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectProgressBar },
      template: `
      <div class="container">
        <h2>Progress Bar</h2>
        <br>
        primary :  
        <virnect-progress-bar indeterminate color="primary"></virnect-progress-bar>
        <br>
        <br>
        success :  
        <virnect-progress-bar indeterminate color="success"></virnect-progress-bar>
        <br>
        <br>
        danger :  
        <virnect-progress-bar indeterminate color="danger"></virnect-progress-bar>
        <br>
        <br>
        warning :  
        <virnect-progress-bar indeterminate color="warning"></virnect-progress-bar>
        <br>
        <br>
        dark :  
        <virnect-progress-bar indeterminate color="dark"></virnect-progress-bar>
        <br>
        <br><br>
      </div>
      `
    };
  },
  {
    notes: {
      markdown: description
    }
  }
)