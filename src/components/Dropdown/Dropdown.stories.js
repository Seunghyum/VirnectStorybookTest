// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectDropdown from "./Dropdown.vue"
import VirnectDropdownItem from "./DropdownItem.vue"
import VirnectDropdownGroup from "./DropdownGroup.vue"
import VirnectDropdownMenu from "./DropdownMenu.vue"
import VirnectButton from "../Button/Button.vue"

import description from './description.md';

const storysof = storiesOf('Dropdown', module)

storysof.add(
  'Default', 
  () => {
    return {
      components: { 
        VirnectDropdown,
        VirnectDropdownItem,
        VirnectDropdownGroup,
        VirnectDropdownMenu,
        VirnectButton 
      },
      template: `
      <div class="container">
        <h2>Dropdown</h2>
        <br>
        <div class="examplex">
          <virnect-dropdown >
            <virnect-button  color="primary" type="filled">Dropdown</virnect-button>
      
            <virnect-dropdown-menu>
              <virnect-dropdown-item>
                Option 1
              </virnect-dropdown-item>
              <virnect-dropdown-item disabled>
                Option 2
              </virnect-dropdown-item >
              <virnect-dropdown-item disabled divider>
                Option 3
              </virnect-dropdown-item>
            </virnect-dropdown-menu>
          </virnect-dropdown>
        </div>
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