<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'inbox',
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
