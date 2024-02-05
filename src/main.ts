import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/plugins/i18n'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

import App from './App.vue'
import router from './router'

import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY
})

// Vercel Web Analytics
inject()

// Vercel Speed Insights
injectSpeedInsights()

app.mount('#app')
