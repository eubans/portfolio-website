import { createVNode, render } from 'vue'

import { useI18n } from 'vue-i18n'

import CustomBackdropAlert from '@/components/CustomBackdropAlert.vue'

const DEFAULT_DURATION = 5000

export const useBackdropAlert = () => {
  const { t: translate } = useI18n()

  // Creating a new div container to mount the alert component
  const container = document.createElement('div')
  document.body.appendChild(container)

  const showAlert = (message: string, loading?: boolean, duration = DEFAULT_DURATION) => {
    // Clear container
    render(null, container)

    // Creating a Vue virtual node with the CustomBackdropAlert component and the provided message
    const props = {
      message: translate(message),
      loading
    }
    const vNode = createVNode(CustomBackdropAlert, props)

    // Rendering the virtual node into the container
    render(vNode, container)

    // Setting a timeout to remove the alert after the specified duration
    setTimeout(() => {
      render(null, container)
    }, duration)
  }

  return {
    showAlert
  }
}
