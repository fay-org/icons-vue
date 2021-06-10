<template>
  <alertCircleFill />
  <github />
  <gitlab :size="22" :color="'pink'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import github from '../packages/github'
import gitlab from '../packages/gitlab'
import alertCircleFill from '../packages/alertCircleFill'

export default defineComponent({
  name: 'App',
  components: {
    alertCircleFill,
    github,
    gitlab,
  },
})
</script>
