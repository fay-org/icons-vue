<template>
  <div id="nav">
    <fect-icon icon="github" />
    <fect-icon icon="gitlab" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import fectIcon from '../packages/fectIcon.vue'
export default defineComponent({
  components: { fectIcon },
  setup() {
    return {}
  },
})
</script>

<style></style>
