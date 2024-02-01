import type { ContactFormEntity } from '@/entities'
import { useSendEmail } from '@/composables'

export const useContactForm = () => {
  const TO_EMAIL = import.meta.env.VITE_EMAIL_TO
  const TO_NAME = import.meta.env.VITE_FULL_NAME
  const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID

  const { loading } = useSendEmail()
  const { send: sendEmail } = useSendEmail()

  const submit = async (form: ContactFormEntity) => {
    const fullName = `${form.firstName} ${form.lastName}`

    // Template parameters of the template
    const formPayload = {
      to: TO_EMAIL,
      from_name: fullName,
      to_name: TO_NAME,
      from_email: form.emailAddress,
      from_phone: form.phoneNumber,
      subject: form.subject,
      message: form.message
    }

    await sendEmail(formPayload, CONTACT_TEMPLATE_ID)
  }

  return {
    loading,
    submit
  }
}
