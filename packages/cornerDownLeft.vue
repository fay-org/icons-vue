<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="m9 10-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'cornerDownLeft',
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
