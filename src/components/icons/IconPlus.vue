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
    :height="props.width"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
</template>
