import type { ExperienceEntity } from '@/entities'

export const ExperiencesData: ExperienceEntity[] = [
  {
    id: 1,
    company: 'Company 1',
    from: '2017-01',
    to: '2020-01',
    positions: [
      {
        id: 1,
        title: 'Software Engineer',
        from: '2017-01',
        to: '2020-01'
      }
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    languages: ['PHP', 'JavaScript', 'SQL', 'C#', 'Java', 'HTML', 'CSS'],
    libraries: ['Laravel', 'Vue.js', 'CodeIgniter', 'jQuery', 'Bootstrap', 'ASP.NET'],
    tools: ['Git', 'Bitbucket', 'Jira', 'MySQL', 'MSSQL', 'Oracle Database', 'Linux Server']
  },
  {
    id: 2,
    company: 'Company 2',

    from: '2020-01',
    to: '2022-01',
    positions: [
      {
        id: 1,
        title: 'Web Developer',
        from: '2020-01',
        to: '2022-01'
      }
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    languages: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    libraries: ['Laravel', 'Vue.js', 'jQuery'],
    tools: [
      'Git',
      'GitLab',
      'Jira',
      'MySQL',
      'Oracle Database',
      'Windows Server',
      'GCash API',
      'Paynamics API'
    ]
  },
  {
    id: 3,
    company: 'Company 3',
    from: '2022-01',
    to: '2023-01',
    positions: [
      {
        id: 1,
        title: 'Senior Web Developer',
        from: '2022-01',
        to: '2023-01'
      }
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel malesuada urna. Pellentesque aliquam porta eros nec pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    languages: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Python', 'HTML', 'CSS'],
    libraries: ['Laravel', 'Vue.js', 'Angular', 'SCSS'],
    tools: [
      'Git',
      'Github',
      'Trello',
      'MySQL',
      'Oracle Database',
      'Azure Cloud',
      'Facebook API',
      'Twilio SMS',
      'DragonPay API'
    ]
  }
]
