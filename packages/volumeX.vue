<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="M11 5 6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'volumeX',
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
