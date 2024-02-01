<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
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

const emit = defineEmits<{
  (event: 'update:modelValue', value: String): void
}>()

const classes = computed(() => [props.block && 'w-full'])

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <textarea
    :value="modelValue"
    :rows="props.rows"
    class="bg-transparent border-2 border-tertiary text-xl p-2"
    :class="classes"
    @input="onInput"
  />
</template>
