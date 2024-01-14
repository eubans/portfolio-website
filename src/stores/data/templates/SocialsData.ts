/**
 * NOTE: This file serves as your template.
 * Please move it to src/stores/data.
 */

import type { SocialEntity } from '@/entities'

import IconGithub from '@/components/icons/IconGithub.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconSourceCode from '@/components/icons/IconSourceCode.vue'
import IconIdentification from '@/components/icons/IconIdentification.vue'

export const SocialsData: SocialEntity[] = [
  {
    id: 1,
    name: 'GitHub',
    link: '#',
    icon: IconGithub
  },
  {
    id: 2,
    name: 'X',
    link: '#',
    icon: IconTwitter
  },
  {
    id: 3,
    name: 'LinkedIn',
    link: '#',
    icon: IconLinkedin
  },
  {
    id: 4,
    name: 'Source Code',
    link: '#',
    icon: IconSourceCode
  },
  {
    id: 5,
    name: 'View Resume',
    link: '#',
    icon: IconIdentification
  }
]
