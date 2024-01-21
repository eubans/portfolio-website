<script setup lang="ts">
import { ref } from 'vue'
import type { ContactFormEntity } from '@/entities'

import { useContactForm } from '@/composables'

import ContactForm from '@/views/forms/ContactForm.vue'

const { loading, submit } = useContactForm()

const ContactFormElement = ref<InstanceType<typeof ContactForm>>()
const form = ref<ContactFormEntity>({
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  subject: '',
  message: ''
})

const handleSubmit = async (form: ContactFormEntity) => {
  try {
    await submit(form)
    clearForm()
  } catch (error) {
    // @TODO: Create an error popup
    console.error(`Error: ${(error as Error).message}`)
  }
}

const clearForm = () => {
  form.value = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: ''
  }

  ContactFormElement.value?.resetRecaptcha()
}
</script>

<template>
  <div class="bg-primary">
    <div class="container mx-auto pt-32 pb-10 px-5 md:px-10 lg:px-20 text-quaternary">
      <h4 class="text-4xl text-tertiary font-comfortta uppercase mb-5 font-semibold">
        {{ $t('view.contact.title') }}
      </h4>
      <ContactForm
        ref="ContactFormElement"
        :form="form"
        :loading="loading"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>
