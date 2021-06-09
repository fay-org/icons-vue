<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="M13.833 8.875S15.085 7 18.043 7C21 7 23 9.5 23 12s-1.784 5-4.864 5-4.914-3.124-6.136-5c-1.222-1.875-3.392-5-6.446-5S1 9.5 1 12s1.351 5 4.648 5c3.296 0 4.519-1.875 4.519-1.875"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'infinity',
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
