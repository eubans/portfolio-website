<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    required: false,
    default: '32'
  },
  height: {
    type: String,
    required: false,
    default: '32'
  }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" />
  </svg>
</template>
