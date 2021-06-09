<template>
  <svg
    :width="setSize"
    :height="setSize"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    :style="{ color: setColor }"
  >
    <rect x="3" y="3" :width="setSize" :height="setSize" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'image',
  props: {
    color: {
      type: String,
      default: 'currentColor',
    },
    size: [String, Number],
  },
  setup(props) {
    const setColor = computed(() => {
      color: props.color
    })

    const setSize = computed(() => props.size)

    return {
      setColor,
      setSize,
    }
  },
})
</script>
