<script setup lang="ts">
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
</script>

<template>
  <header>
    <HeaderLayout class="font-header" />
  </header>
  <body>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </body>
  <footer>
    <FooterLayout />
  </footer>
</template>
