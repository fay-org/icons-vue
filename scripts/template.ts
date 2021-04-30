const renderTempalte = `
<template>
  <svg
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    :style="{ color: color }"
    shapeRendering="geometricPrecision"
    v-html="renderIcons()"
  ></svg>
</template>\n`

const scriptTempalte = `<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import iconsPool from './iconsPool'
export default defineComponent({
  name: 'fectIcon',
  props: {
    icon: {
      type: [String],
      default: '',
    },
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  setup(props) {
    const { icon } = toRefs(props)
    const camelize = (name: string) => {
      const CAMELIZE_REG = /-(w)/g
      return name.replace(CAMELIZE_REG, (_, key) => key.toUpperCase())
    }

    if (icon.value === '') throw "icon value can't be empty"
    const isIcon: boolean = Object.keys(iconsPool).includes(icon.value)
    if (!isIcon) throw 'Abort! Please enter the correct icon value'

    const renderIcons = () => iconsPool[camelize(icon?.value as string)]
    return {
      renderIcons,
    }
  },
})
</script>`

const installerTemplate = `import fectIcon from './fectIcon.vue';\n

import { App } from 'vue';\n
const install = (app: App): void => {
  app.component('fectIcon', fectIcon)
}

export default install;


`

const makeBasicDefine = `import { App } from 'vue';\n

export class FectComponent {
  static name: string

  static install: (app: App) => any

  $props: Record<string, any>
};\n

export default class FectIcon extends FectComponent {};\n
`

export { renderTempalte, scriptTempalte, installerTemplate, makeBasicDefine }
