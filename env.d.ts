/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FULL_NAME: string
  readonly VITE_EXPERTISE: string
  readonly VITE_EXPERTISE_FOCUS: string
  readonly VITE_EXPERTISE_FULL: string
  readonly VITE_LOCATION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
