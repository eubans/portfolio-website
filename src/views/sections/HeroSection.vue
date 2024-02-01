<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'

import HeroImage from '@/assets/images/hero1.png'
import HeroImageSM from '@/assets/images/hero3.png'
import LaravelImage from '@/assets/images/logos/laravel.png'
import VueImage from '@/assets/images/logos/vue.png'
import TypeScriptImage from '@/assets/images/logos/typescript.png'
import PHPImage from '@/assets/images/logos/php.png'
import JavaScriptImage from '@/assets/images/logos/javascript.png'

import CustomButton from '@/components/CustomButton.vue'

const env = import.meta.env
const FULL_NAME = env.VITE_FULL_NAME
const EXPERTISE = env.VITE_EXPERTISE
const EXPERTISE_FOCUS = env.VITE_EXPERTISE_FOCUS
const LOCATION = env.VITE_LOCATION

const TYPES = [LaravelImage, VueImage, PHPImage, TypeScriptImage, JavaScriptImage]

const type = ref<string>(TYPES[0])
const interval = ref<number>(1200)

const { pause, resume, isActive } = useIntervalFn(() => {
  let key = TYPES.findIndex((item: string) => item === type.value)
  if (key !== -1) {
    let newKey = key + 1

    if (TYPES[newKey] === undefined) newKey = 0
    type.value = TYPES[newKey]
  }
}, interval)

const isTypeImage = computed(() => type.value.includes('src'))
const isShowImage = computed(() => isTypeImage.value && isActive.value)

const stop = () => {
  pause()
  type.value = TYPES[0]
}

onMounted(() => {
  stop()
})
</script>

<template>
  <section
    class="w-full sm:h-screen relative flex flex-col sm:flex-row justify-center sm:justify-center justify-items-start sm:items-center text-slate-900"
  >
    <div
      class="relative w-full sm:ml-32 px-5 sm:px-0 pt-32 sm:pt-0 bg-quaternary sm:bg-transparent"
    >
      <p class="text-3xl sm:text-5xl mb-2">{{ $t('section.hero.introduction') }}</p>
      <h2
        class="text-5xl sm:text-7xl font-comfortta text-secondary w-fit"
        :class="isActive ? 'cursor-code' : 'cursor-pointer'"
        @mouseenter="resume"
        @mouseleave="stop"
      >
        {{ FULL_NAME }}
      </h2>
      <div class="text-xl sm:text-3xl mt-3 flex">
        <img
          v-if="isShowImage"
          :src="type"
          class="h-12 mr-2 w-28 transition-all duration-200"
          :alt="$t('alt.technologyLogo')"
        />
        <h1 :class="isShowImage && 'pt-2'">
          <span v-if="!isShowImage">{{ EXPERTISE_FOCUS }}</span>
          {{ EXPERTISE }} {{ $t('common.in') }} {{ LOCATION }}
        </h1>
      </div>
      <CustomButton class="text-xl py-5 uppercase mt-5 w-full sm:w-auto">
        {{ $t('common.getInTouch') }}
      </CustomButton>
    </div>
    <picture
      class="Hero-image bg-quaternary mix-blend-darken h-[40vh] sm:h-screen sm:w-full relative sm:absolute overflow-hidden -z-10 object-cover object-top sm:object-center"
    >
      <source media="(max-width:640px)" :srcset="HeroImageSM" />
      <img
        :src="HeroImage"
        class="relative sm:absolute xl:relative sm:bottom-0 2xl:bottom-auto"
        :alt="$t('alt.hero')"
      />
    </picture>
  </section>
</template>

<style scoped lang="scss">
.Hero-image {
  filter: opacity(0.9) drop-shadow(0 0 0 theme('colors.quaternary'));
}
</style>
