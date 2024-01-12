export interface ExperiencePositionEntity {
  id: number
  title: string
  subtitle?: string
  from: string
  to: string
}

export interface ExperienceEntity {
  id: number
  company: string
  from: string
  to: string
  positions: ExperiencePositionEntity[]
  description: string
  languages: string[]
  libraries: string[]
  tools: string[]
}
