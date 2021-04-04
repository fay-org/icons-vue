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
    icon: String,
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
      const CAMELIZE_REG = /-(\w)/g
      return name.replace(CAMELIZE_REG, (_, key) => key.toUpperCase())
    }

    const renderIcons = () => iconsPool[camelize(icon?.value as string)] || null

    return {
      renderIcons,
    }
  },
})
</script>
