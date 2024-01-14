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
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
