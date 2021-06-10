<template>
  <alertCircleFill />
  <github />
  <gitlab />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import github from '../packages/github.vue'
import gitlab from '../packages/gitlab.vue'
import alertCircleFill from '../packages/alertCircleFill.vue'

export default defineComponent({
  name: 'App',
  components: {
    alertCircleFill,
    github,
    gitlab,
  },
})
</script>
