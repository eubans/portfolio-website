<script setup lang="ts">
import FormInput from '@/components/forms/FormInput.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import CustomButton from '@/components/CustomButton.vue'
</script>

<template>
  <form class="grid sm:grid-cols-2 gap-4">
    <div>
      <FormInput
        type="text"
        :placeholder="`${$t('view.contact.form.firstName')} *`"
        required
        block
      />
    </div>
    <div>
      <FormInput
        type="text"
        :placeholder="`${$t('view.contact.form.lastName')} *`"
        required
        block
      />
    </div>
    <div>
      <FormInput
        type="email"
        :placeholder="`${$t('view.contact.form.emailAddress')} *`"
        required
        block
      />
    </div>
    <div>
      <FormInput type="tel" :placeholder="$t('view.contact.form.phoneNumber')" block />
    </div>
    <div class="sm:col-span-2">
      <FormInput type="tel" :placeholder="`${$t('view.contact.form.subject')} *`" required block />
    </div>
    <div class="sm:col-span-2">
      <FormTextarea rows="5" :placeholder="`${$t('view.contact.form.message')} *`" required block />
    </div>
    <div class="sm:col-span-2">
      <CustomButton class="w-full sm:w-52 text-xl py-3 uppercase">
        {{ $t('view.contact.form.sendIt') }}
      </CustomButton>
    </div>
  </form>
</template>
