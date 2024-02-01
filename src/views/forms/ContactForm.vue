<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'
import type { ContactFormEntity } from '@/entities'
import { RecaptchaThemes } from '@/types'

import FormInput from '@/components/forms/FormInput.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import CustomButton from '@/components/CustomButton.vue'
import RecaptchaCheckbox from '@/components/plugins/RecaptchaCheckbox.vue'

interface ContactFormProps {
  form: ContactFormEntity
  loading?: boolean
}

interface ContactFormEmits {
  (event: 'submit', value: ContactFormEntity): void
}

const props = withDefaults(defineProps<ContactFormProps>(), {
  loading: false
})
const emit = defineEmits<ContactFormEmits>()

const { form } = toRefs(props)

const recaptcha = ref<string>('')

const isSubmitDisabled = computed(() => !recaptcha.value)

const handleSubmit = () => emit('submit', form.value)

const resetRecaptcha = () => (recaptcha.value = '')

defineExpose({
  resetRecaptcha
})
</script>

<template>
  <form class="grid sm:grid-cols-2 gap-4" @submit.prevent="handleSubmit">
    <div>
      <FormInput
        v-model="form.firstName"
        type="text"
        :placeholder="`${$t('view.contact.form.firstName')} *`"
        required
        block
        autocomplete="given-name"
      />
    </div>
    <div>
      <FormInput
        v-model="form.lastName"
        type="text"
        :placeholder="`${$t('view.contact.form.lastName')} *`"
        required
        block
        autocomplete="family-name"
      />
    </div>
    <div>
      <FormInput
        v-model="form.emailAddress"
        type="email"
        :placeholder="`${$t('view.contact.form.emailAddress')} *`"
        required
        block
        autocomplete="email"
      />
    </div>
    <div>
      <FormInput
        v-model="form.phoneNumber"
        type="tel"
        :placeholder="$t('view.contact.form.phoneNumber')"
        block
        autocomplete="tel"
      />
    </div>
    <div class="sm:col-span-2">
      <FormInput
        v-model="form.subject"
        type="tel"
        :placeholder="`${$t('view.contact.form.subject')} *`"
        required
        block
        autocomplete="off"
      />
    </div>
    <div class="sm:col-span-2">
      <FormTextarea
        v-model="form.message"
        rows="5"
        :placeholder="`${$t('view.contact.form.message')} *`"
        required
        block
        autocomplete="off"
      />
    </div>
    <div class="sm:col-span-2">
      <RecaptchaCheckbox v-model="recaptcha" :theme="RecaptchaThemes.DARK" />
    </div>
    <div class="sm:col-span-2">
      <CustomButton
        type="submit"
        :disabled="loading || isSubmitDisabled"
        class="w-full sm:w-52 text-xl py-3 uppercase"
      >
        {{ $t(`view.contact.action.${loading ? 'sending' : 'sendIt'}`) }}
      </CustomButton>
    </div>
  </form>
</template>
