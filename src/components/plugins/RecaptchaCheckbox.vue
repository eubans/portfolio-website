<script setup lang="ts">
import { RecaptchaThemes, RecaptchaSizes } from '@/types'
import { Checkbox, useRecaptchaProvider } from 'vue-recaptcha/head'

interface RecaptchaCheckboxProps {
  theme?: RecaptchaThemes
  size?: RecaptchaSizes
}

withDefaults(defineProps<RecaptchaCheckboxProps>(), {})

useRecaptchaProvider()
</script>

<template>
  <Checkbox :theme="theme" :size="size" />
</template>
