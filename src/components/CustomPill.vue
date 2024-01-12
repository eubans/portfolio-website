<script setup lang="ts">
import { toRefs, computed } from 'vue'

type CustomPillSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

interface CustomPillProps {
  size?: CustomPillSizes
}

const props = withDefaults(defineProps<CustomPillProps>(), {
  size: 'base'
})

const { size } = toRefs(props)

const fontSize = computed(() => `text-${size.value}`)
</script>

<template>
  <span class="rounded-full py-1 px-3 mr-1 mb-1" :class="fontSize">
    <slot />
  </span>
</template>
