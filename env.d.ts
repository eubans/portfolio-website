/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_TITLE: string
  readonly VITE_FULL_NAME: string
  readonly VITE_EXPERTISE: string
  readonly VITE_EXPERTISE_FOCUS: string
  readonly VITE_EXPERTISE_FULL: string
  readonly VITE_LOCATION: string
  readonly VITE_COPYRIGHT_YEAR: string
  readonly VITE_DEPLOYED_SERVER: string
  readonly VITE_EMAIL_TO: string
  readonly VITE_EMAIL_API: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_CONTACT_TEMPLATE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
