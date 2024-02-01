<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  block: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: String): void
}>()

const classes = computed(() => [props.block && 'w-full'])

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="bg-transparent border-2 border-tertiary h-14 text-xl px-2"
    :class="classes"
    @input="onInput"
  />
</template>
