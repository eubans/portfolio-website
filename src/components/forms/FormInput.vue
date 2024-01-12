<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  block: {
    type: Boolean,
    required: false,
    default: false
  }
})

const classes = computed(() => [props.block && 'w-full'])
</script>

<template>
  <input class="bg-transparent border-2 border-tertiary h-14 text-xl px-2" :class="classes" />
</template>
