<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="m6.52 10.2 4.24 5.65m.01-9.9a2 2 0 0 0 0-2.83l-.7-.71L3 9.49l.7.7a1.998 1.998 0 0 0 2.83 0m4.24 5.66 5.66-5.66m-5.66 5.66s-1.76 2.47.71 4.95l9.89-9.9c-2.47-2.48-4.95-.7-4.95-.7m-5.65 5.65 5.65-5.65m0 0-5.66-4.25m5.66 9.9 4.24 4.24"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'pin',
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
