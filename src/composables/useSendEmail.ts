import { storeToRefs } from 'pinia'

import type { EmailSendFormEntity } from '@/entities/emails'
import { useEmailStore } from '@/stores'

export const useSendEmail = () => {
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID

  const { loading } = storeToRefs(useEmailStore())
  const { sendEmail } = useEmailStore()

  const send = async (form: EmailSendFormEntity, templateId: string) => {
    const payload = {
      service_id: SERVICE_ID,
      template_id: templateId,
      user_id: PUBLIC_KEY,
      template_params: form
    }

    await sendEmail(payload)
  }

  return {
    loading,
    send
  }
}
