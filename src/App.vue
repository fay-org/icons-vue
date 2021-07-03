<template>
  <div class="fx">
    <div v-for="(item, i) in icons" :key="i" class="itm">
      <component :is="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icons from './pool'

export default defineComponent({
  name: 'App',

  setup() {
    const icons = Icons
    return {
      icons,
    }
  },
})
</script>

<style scoped>
.fx {
  display: flex;
  flex-wrap: wrap;
}
.itm {
  width: 50px;
  height: 50px;
}
</style>
