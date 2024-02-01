<script setup lang="ts">
import IconCode from '@/components/icons/IconCode.vue'

interface CustomBackdropAlertProps {
  message: string
  loading?: boolean
}

withDefaults(defineProps<CustomBackdropAlertProps>(), {
  loading: false
})
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary/50 text-quaternary flex flex-col items-center justify-center fadeOut 5s ease-in-out"
  >
    <IconCode v-if="loading" class="animate-spin" height="64" width="64" />
    <p class="text-2xl">{{ message }}</p>
  </div>
</template>
