export interface TestimonialCompanyEntity {
  name: string
  link: string
}

export interface TestimonialEntity {
  id: number
  name: string
  position: string
  company: string | TestimonialCompanyEntity
  text: string
}
