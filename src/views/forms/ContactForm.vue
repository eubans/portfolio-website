<script setup lang="ts">
import FormInput from '@/components/forms/FormInput.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import CustomButton from '@/components/CustomButton.vue'
</script>

<template>
  <form class="grid sm:grid-cols-2 gap-4">
    <div>
      <FormInput type="text" placeholder="First Name *" required block />
    </div>
    <div>
      <FormInput type="text" placeholder="Last Name *" required block />
    </div>
    <div>
      <FormInput type="email" placeholder="Email Address *" required block />
    </div>
    <div>
      <FormInput type="tel" placeholder="Phone Number" block />
    </div>
    <div class="sm:col-span-2">
      <FormInput type="tel" placeholder="Subject *" required block />
    </div>
    <div class="sm:col-span-2">
      <FormTextarea rows="5" placeholder="Message *" required block />
    </div>
    <div class="sm:col-span-2">
      <CustomButton class="w-full sm:w-52 text-xl py-3 uppercase"> Send it </CustomButton>
    </div>
  </form>
</template>
