<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><rect x="2" y="7" :width="setSize" :height="setSize" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'tv',
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
