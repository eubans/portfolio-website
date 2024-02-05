<script setup lang="ts">
import { CustomButtonTypes } from '@/types'

interface CustomButtonProps {
  as?: CustomButtonTypes
}

withDefaults(defineProps<CustomButtonProps>(), {
  as: CustomButtonTypes.BUTTON
})
</script>
<template>
  <component
    :is="as"
    class="bg-tertiary text-quaternary text-lg py-1 px-5 rounded inline-block text-center hover:bg-tertiary/75 disabled:bg-tertiary/50 disabled:cursor-not-allowed"
  >
    <slot />
  </component>
</template>
