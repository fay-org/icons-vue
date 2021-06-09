<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" :style={color:setColor}><path d="M7.91 3h8.18a4.908 4.908 0 0 1 4.31 2.554l-8.273 8.377-2.592-2.638a.75.75 0 1 0-1.07 1.05l3.125 3.182a.75.75 0 0 0 1.069.002l8.281-8.386c.04.25.06.507.06.768v8.182A4.909 4.909 0 0 1 16.09 21H7.91A4.909 4.909 0 0 1 3 16.09V7.91A4.91 4.91 0 0 1 7.91 3z" fill="var(--geist-fill)" stroke="none"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'checkboxFill',
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
