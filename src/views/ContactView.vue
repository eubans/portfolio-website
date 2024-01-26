<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ContactFormEntity } from '@/entities'

import { useContactForm, useBackdropAlert } from '@/composables'

import ContactForm from '@/views/forms/ContactForm.vue'

const { loading, submit } = useContactForm()
const { showAlert } = useBackdropAlert()

const ContactFormElement = ref<InstanceType<typeof ContactForm>>()
const form = reactive<ContactFormEntity>({
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  subject: '',
  message: ''
})

const handleSubmit = async (form: ContactFormEntity) => {
  const setAlertLocale = (type: string) => `view.contact.alert.${type}`

  showAlert(setAlertLocale('loading'), true)

  try {
    await submit(form)
    clearForm()
    showAlert(setAlertLocale('success'))
  } catch (error) {
    showAlert(setAlertLocale('failed'))
  }
}

const clearForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.emailAddress = ''
  form.phoneNumber = ''
  form.subject = ''
  form.message = ''

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
