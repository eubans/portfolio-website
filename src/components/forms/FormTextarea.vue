<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  rows: {
    type: String,
    required: true,
    default: '2'
  },
  block: {
    type: Boolean,
    required: false,
    default: false
  }
})

const classes = computed(() => [props.block && 'w-full'])
</script>

<template>
  <textarea
    :rows="props.rows"
    class="bg-transparent border-2 border-tertiary text-xl p-2"
    :class="classes"
  />
</template>
