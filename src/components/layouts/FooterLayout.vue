<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'

import type { SocialEntity } from '@/entities'
import { SocialsData } from '@/stores/data'

const env = import.meta.env
const FULL_NAME = env.VITE_FULL_NAME
const EXPERTISE_FULL = env.VITE_EXPERTISE_FULL
const DEPLOYED_SERVER = env.VITE_DEPLOYED_SERVER
const COPYRIGHT_YEAR = env.VITE_COPYRIGHT_YEAR

const socials: SocialEntity[] = SocialsData
</script>

<template>
  <div class="bg-primary">
    <div class="container mx-auto px-5 md:px-10 lg:px-20 text-quaternary">
      <div
        class="flex flex-col sm:flex-row py-10 sm:py-20 justify-between border-t-2 border-tertiary"
      >
        <div class="w-full md:w-4/6 lg:w-3/6">
          <h4 class="text-4xl mb-5 sm:mb-10 text-tertiary font-comfortta uppercase font-semibold">
            {{ $t('footer.text', { expertise: EXPERTISE_FULL }) }}
          </h4>
          <CustomButton class="text-xl py-5 uppercase w-full sm:w-auto">
            {{ $t('common.getInTouch') }}
          </CustomButton>
        </div>
        <div class="w-full sm:w-2/6 mt-5 sm:mt-0">
          <ul>
            <li class="mb-3" v-for="social in socials" :key="`social-${social.id}`">
              <a
                class="flex text-lg opacity-75 hover:text-tertiary hover:opacity-100"
                :href="social.link"
              >
                <Component :is="social.icon" class="mr-2" width="24" height="24" />{{ social.name }}
              </a>
            </li>
            <li>
              <p class="text-quaternary/75">
                {{ $t('common.builtWith') }}
                <a class="text-tertiary font-semibold">{{ $t('common.vuejs') }}</a>
                {{ $t('common.and') }}
                <a class="text-tertiary font-semibold">{{ $t('common.tailwindCss') }}</a
                >&comma;
                {{ $t('common.deployedWith') }}
                <a class="text-tertiary font-semibold">{{ DEPLOYED_SERVER }}</a
                >&period;
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center pb-5">
        <h6>
          &copy; {{ $t('common.copyright') }} {{ COPYRIGHT_YEAR }} &ndash;
          <a class="text-tertiary font-semibold font-comfortta" href="/">{{ FULL_NAME }}</a>
        </h6>
      </div>
    </div>
  </div>
</template>
