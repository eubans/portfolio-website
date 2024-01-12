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
    <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
</template>
