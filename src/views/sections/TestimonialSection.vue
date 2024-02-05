<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import type { TestimonialEntity } from '@/entities'
import { TestimonialsData } from '@/stores/data'

const SLIDER_SPEED = 1000
const SLIDER_DELAY = 7000
const testimonials: TestimonialEntity[] = TestimonialsData

const sliderModules = computed(() => [Autoplay, Pagination])
const autoplayConfig = computed(() => ({
  delay: SLIDER_DELAY
}))
const paginationConfig = computed(() => ({
  bulletActiveClass: '!bg-tertiary !opacity-100',
  bulletClass: 'swiper-pagination-bullet !mx-3 !h-3 !w-3'
}))
</script>

<template>
  <section id="testimonials" class="bg-primary w-full">
    <div class="container mx-auto py-10 px-5 md:px-10 lg:p-20">
      <div class="text-tertiary text-4xl pb-5 font-comfortta">
        <h2>{{ $t('section.testimonial.title') }}</h2>
      </div>
      <div class="text-quaternary text-xl">
        <Swiper
          :autoplay="autoplayConfig"
          :pagination="paginationConfig"
          loop
          :modules="sliderModules"
          :speed="SLIDER_SPEED"
          class="border-2 border-tertiary mx-1"
        >
          <SwiperSlide v-for="testimonial in testimonials" :key="`testimonial-${testimonial.id}`">
            <div class="flex flex-col mx-auto px-5 sm:px-10 xl:px-48 pt-5 sm:pt-10 xl:pt-28 pb-12">
              <p v-html="testimonial.text" class="md:text-2xl h-[17rem]" />
              <div class="mt-12 text-right text-base md:text-xl">
                <h6 class="font-comfortta">{{ testimonial.name }}</h6>
                <div>
                  <span class="opacity-75 font-light">
                    {{ testimonial.position }}
                  </span>
                  <span v-if="testimonial.company" class="opacity-75 font-light">
                    &ndash; {{ testimonial.company }}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
