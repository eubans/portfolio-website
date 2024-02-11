<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import IconMenu from '../icons/IconMenu.vue'

import LogoLight from '@/assets/logo-light.png'
import LogoDark from '@/assets/logo-dark.png'

const route = useRoute()

const showMenu = ref<boolean>(false)
const isScrolled = ref<boolean>(false)

const isMainView = computed(() => route.fullPath === '/')
const isFilled = computed(() => isScrolled.value || !isMainView.value || showMenu.value)
const navbarClass = computed(() => [isFilled.value ? 'bg-primary shadow-lg' : 'bg-transparent'])
const navbarItemClass = computed(() => [isFilled.value ? 'text-quaternary' : 'text-secondary'])
const logo = computed(() => (isFilled.value ? LogoLight : LogoDark))

const toggleMenu = () => (showMenu.value = !showMenu.value)

const handleScroll = () => (isScrolled.value = window.scrollY > 0)

const handleCloseMenu = () => (showMenu.value = false)

window.addEventListener('scroll', handleScroll)
window.addEventListener('click', handleCloseMenu)
</script>

<template>
  <nav
    class="flex flex-wrap items-center justify-between w-full sm:py-0 px-4 sm:px-10 fixed z-50 transition-all duration-200"
    :class="navbarClass"
  >
    <div>
      <a :href="isMainView ? '#' : '/'">
        <img :src="logo" class="h-10 p-1 lg:p-0 mr-2 transition-all duration-200" />
      </a>
    </div>

    <button @click.stop="toggleMenu()">
      <IconMenu
        class="cursor-pointer sm:hidden block"
        :class="navbarItemClass"
        width="36"
        height="36"
      />
    </button>

    <div
      class="w-full sm:flex sm:items-center sm:w-auto"
      :class="[!showMenu && 'hidden']"
      id="menu"
    >
      <ul
        class="pt-4 text-xl sm:text-lg sm:flex sm:justify-between sm:pt-0"
        :class="navbarItemClass"
      >
        <li>
          <a class="py-3 sm:p-4 block hover:text-tertiary" href="/#about">
            {{ $t('navigation.about') }}
          </a>
        </li>
        <li>
          <a class="py-3 sm:p-4 block hover:text-tertiary" href="/#experience">
            {{ $t('navigation.experience') }}
          </a>
        </li>
        <li>
          <a class="py-3 sm:p-4 block hover:text-tertiary" href="/#work">
            {{ $t('navigation.work') }}
          </a>
        </li>
        <li>
          <a class="py-3 sm:p-4 block hover:text-tertiary" href="/#testimonials">
            {{ $t('navigation.testimonials') }}
          </a>
        </li>
        <li>
          <a class="py-3 sm:p-4 block text-tertiary font-bold hover:opacity-75" href="/contact">
            {{ $t('navigation.contact') }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
