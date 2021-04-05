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
</template>
<script lang="ts">
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
</script>
