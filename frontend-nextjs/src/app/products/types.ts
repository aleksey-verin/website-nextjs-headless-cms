export type CMSProducts = CMSProduct[]

export interface CMSProduct {
  id: number
  slug: string
  title: Title
  acf: Acf
}

export interface Title {
  rendered: string
}

export interface Acf {
  summary: string
  large_image: string
  thumbnail: string
  category: Category
}

export interface Category {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
}
