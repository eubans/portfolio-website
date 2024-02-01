import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

import type { EmailSendEntity } from '@/entities/emails'

export const useEmailStore = defineStore('EmailStore', () => {
  const API = import.meta.env.VITE_EMAIL_API

  const loading = ref<boolean>(false)

  const setLoading = (state: boolean) => (loading.value = state)

  const sendEmail = (payload: EmailSendEntity) => {
    setLoading(true)

    return axios
      .post(`${API}/send`, payload)
      .then((response) => {
        return response
      })
      .catch((e) => {
        throw e
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    loading,
    sendEmail
  }
})
