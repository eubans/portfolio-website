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
    <path
      fill="currentColor"
      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z"
    />
  </svg>
</template>
