<template><svg :width="setSize" :height="setSize" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style={color:setColor}><path d="M13 2H6a2 2 0 0 0-2 2v16m0 0a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M4 20V9m16 11V9m0 11V4a2 2 0 0 0-2-2h-7"/><path d="M9 11.236h2.848M9 18c1.934 0 2.848-.996 2.848-2.793v-3.97m0 0h2.813m-2.813 0V8.983c0-1.937 1.034-3.265 3.152-2.933"/></svg></template>
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: 'fileFunction',
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
