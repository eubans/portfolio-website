export interface EmailSendFormEntity {
  to: string
  to_name: string
  from_name: string
  from_email: string
  from_phone?: string
  subject: string
  message: string
  reply_to?: string
}

export interface EmailSendEntity {
  service_id: string
  template_id: string
  user_id: string
  template_params?: EmailSendFormEntity
  accessToken?: string
}
