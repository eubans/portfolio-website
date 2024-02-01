<script setup lang="ts">
import type { AboutEntity } from '@/entities'
import { AboutData } from '@/stores/data'

const about: AboutEntity = AboutData
</script>

<template>
  <section id="about" class="bg-primary w-full">
    <div class="container mx-auto px-5 md:px-10 lg:px-20 pt-10 lg:pt-20 pb-0">
      <div class="text-tertiary text-4xl pb-5 font-comfortta">
        <h2>{{ $t('section.about.title') }}</h2>
      </div>
      <div v-html="about.html" class="text-quaternary text-base md:text-xl" />
    </div>
  </section>
</template>
