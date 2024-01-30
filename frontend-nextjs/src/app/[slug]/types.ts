export type CMSPages = CMSPage[]

export interface CMSPage {
  id: number
  slug: string
  title: Title
  content: Content
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}
