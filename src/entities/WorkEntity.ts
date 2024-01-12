export interface WorkEntity {
  id: number
  title: string
  year: string
  company?: string
  link?: string
  github?: string
  freelance?: boolean
  builtScratch?: boolean
  featured?: boolean
  hide?: boolean
  description: string
  technologies: string[]
  image?: string
}
