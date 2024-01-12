/**
 * NOTE: This file serve as your template.
 * Please move this to src/stores/data.
 */

import type { WorkEntity } from '@/entities'

import PlaceholderImage from '@/assets/images/works/placeholder.png'

export const WorksData: WorkEntity[] = [
  {
    id: 1,
    title: 'Project 1',
    year: '2017',
    company: 'Company 1',
    link: 'https://example.com/',
    builtScratch: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    image: PlaceholderImage
  },
  {
    id: 2,
    title: 'Project 2',
    year: '2018',
    company: 'Company 2',
    freelance: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    technologies: ['ASP.NET', 'jQuery', 'MSSQL']
  },
  {
    id: 3,
    title: 'Project 3',
    year: '2018',
    company: 'Company 3',
    link: 'https://example.com/',
    builtScratch: true,
    freelance: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    image: PlaceholderImage
  },
  {
    id: 4,
    title: 'Project 4',
    year: '2020',
    link: 'https://example.com/',
    freelance: true,
    builtScratch: true,
    featured: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    technologies: ['Laravel', 'jQuery', 'MySQL']
  },
  {
    id: 5,
    title: 'Project 5',
    year: '2021',
    company: 'Company 5',
    link: 'https://example.com/',
    builtScratch: true,
    hide: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    technologies: ['PHP', 'jQuery', 'MySQL', 'Paynamics API'],
    image: PlaceholderImage
  }
]
