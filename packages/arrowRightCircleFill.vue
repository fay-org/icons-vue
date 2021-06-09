<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" :style={color:setColor}><circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path d="m12 16 4-4-4-4" fill="none" stroke="var(--geist-stroke)"/><path d="M8 12h8" stroke="var(--geist-stroke)"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'arrowRightCircleFill',
  props:{
    color:{
      type:String,
      default:'currentColor'
    },
    size:[String,Number]
  },
  setup(props){

    const setColor = computed(()=>{color:props.color});

    const setSize = computed(()=>props.size);

    return {
      setColor,
      setSize,
    }

  }
})
</script>
