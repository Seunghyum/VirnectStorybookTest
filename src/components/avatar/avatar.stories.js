// @ts-ignore
import { storiesOf } from '@storybook/vue';
import VirnectAvatar from "./src/main.vue"
import VirnectCol from "../col/src/col"
import defaultDescription from './default.md';
import typedDescription from './typed.md';
import fitDescription from './fit.md';
import { withKnobs, text, radios   } from '@storybook/addon-knobs';


const storysof = storiesOf('Avatar', module)

storysof.addDecorator(withKnobs)
storysof.add(
  'Default', 
  () => {
    return {
      components: { VirnectAvatar, VirnectCol },
      template: /*html*/`
      <div style="text-align:center; width: 300px; margin:auto;">
        <virnect-col :span="12">
          <div class="sub-title">circle</div>
          <div class="demo-basic--circle">
            <div class="block"><virnect-avatar :size="50" :src="circleUrl"></virnect-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <virnect-avatar :size="size" :src="circleUrl"></virnect-avatar>
            </div>
          </div>
        </virnect-col>  
        <virnect-col :span="12">
          <div class="sub-title">square</div>
          <div class="demo-basic--circle">
            <div class="block"><virnect-avatar shape="square" :size="50" :src="squareUrl"></virnect-avatar></div>
            <div class="block" v-for="size in sizeList" :key="size">
              <virnect-avatar shape="square" :size="size" :src="squareUrl"></virnect-avatar>
            </div>
          </div>
        </virnect-col>
      </div>
      `,
      data() {
        return {
          circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          sizeList: ["large", "medium", "small"]
        }
      },
    };
  },
  {
    notes: {
      markdown: defaultDescription
    }
  }
)

storysof.add(
  'Typed', 
  () => {
    return {
      components: { VirnectAvatar, VirnectCol },
      template: /*html*/`
      <div style="text-align:center; width: 300px; margin:auto;">
        <div class="demo-type">
          <virnect-col :span="8">
            <virnect-avatar icon="el-icon-user-solid"></virnect-avatar>
          </virnect-col>
          <virnect-col :span="8">
            <virnect-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></virnect-avatar>
          </virnect-col>
          <virnect-col :span="8">
            <virnect-avatar> user </virnect-avatar>
          </virnect-col>
        </div>
      </div>
      `
    }
  },
  {
    notes: {
      markdown: typedDescription
    }
  }
)

storysof.add(
  'Fit', 
  () => {
    return {
      components: { VirnectAvatar, VirnectCol },
      template: /*html*/`
      <div>
        <div class="demo-fit">
          <div style="display: inline-block; margin: 10px;" v-for="fit in fits" :key="fit">
              <span class="title">{{ fit }}</span>
              <virnect-avatar shape="square" :size="100" :fit="fit" :src="url"></virnect-avatar>
          </div>
        </div>
      </div>
      `,
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      }
    };
  },
  {
    notes: {
      markdown: fitDescription
    }
  }
)